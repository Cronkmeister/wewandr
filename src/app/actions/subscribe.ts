"use server";

import { z } from "zod";
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

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.error("Missing MAILERLITE_API_KEY environment variable");
    return { status: "error" as const };
  }

  try {
    // Upsert subscriber via MailerLite API
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        groups: ["173426300221916379"]
      }),
    });

    // Handle response codes
    if (response.status === 201) {
      // New subscriber created
      return { status: "ok" as const };
    } else if (response.status === 200) {
      // Existing subscriber updated (duplicate)
      return { status: "duplicate" as const };
    } else if (response.status === 422) {
      // Validation error
      return { status: "invalid" as const };
    } else {
      // Other errors
      const errorData = await response.json().catch(() => ({}));
      console.error("MailerLite API error:", response.status, errorData);
      return { status: "error" as const };
    }
  } catch (error) {
    console.error("Unexpected error during subscription:", error);
    return { status: "error" as const };
  }
}
