"use server";

import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { isDisposableEmail } from "@/lib/disposableDomains";

const schema = z.object({ 
  email: z.string().email("Please enter a valid email address"), 
  company: z.string().optional(), // honeypot
  t: z.number().optional() // timestamp
});

export async function subscribe(formData: FormData) {
  const email = String(formData.get("email") || "");
  const company = String(formData.get("company") || ""); // honeypot
  const t = Number(formData.get("t") || 0);

  // Honeypot check - if company field is filled, silently reject
  if (company) {
    return { status: "ok" as const };
  }

  // Timing check - reject if submitted too quickly (< 400ms)
  if (t && t < 400) {
    return { status: "invalid" as const };
  }

  // Validate email format
  const parsed = schema.safeParse({ email, company, t });
  if (!parsed.success) {
    return { status: "invalid" as const };
  }

  // Check for disposable email domains
  if (isDisposableEmail(email)) {
    return { status: "invalid" as const };
  }

  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing Supabase environment variables");
    return { status: "error" as const };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false }
  });

  try {
    // Get request headers for IP and user agent
    const headers = await import("next/headers");
    const headerList = await headers.headers();
    const ip = headerList.get("x-forwarded-for")?.split(",")[0] ?? null;
    const userAgent = headerList.get("user-agent") ?? null;

    // Insert into waitlist_signups table
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({
        email: email.toLowerCase(),
        ip,
        user_agent: userAgent,
        source: "wewandr-beta"
      });

    if (error) {
      // Check for duplicate email error (PostgreSQL unique constraint violation)
      if (error.code === "23505") {
        return { status: "duplicate" as const };
      }
      
      console.error("Supabase insert error:", error);
      return { status: "error" as const };
    }

    return { status: "ok" as const };
  } catch (error) {
    console.error("Unexpected error during subscription:", error);
    return { status: "error" as const };
  }
}
