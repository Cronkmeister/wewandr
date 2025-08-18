# Supabase Setup Guide for WeWandr Waitlist

## 🚀 Quick Start

Your Next.js app is already configured to work with Supabase! Here's what you need to do to get it running:

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
   - **Name**: `wewandr-waitlist` (or your preferred name)
   - **Database Password**: Choose a strong password
   - **Region**: Select closest to your users
5. Click "Create new project"
6. Wait for setup to complete (usually 2-3 minutes)

## 2. Get Your API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

## 3. Set Up Environment Variables

Create a `.env.local` file in your project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Optional: Analytics
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

⚠️ **Important**: Never commit `.env.local` to git (it's already in `.gitignore`)

## 4. Create the Database Table

Run this SQL in your Supabase **SQL Editor**:

```sql
-- Create waitlist_signups table
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text default 'wewandr-beta',
  user_agent text,
  ip inet,
  created_at timestamptz not null default now()
);

-- Create unique index for emails (case-insensitive)
create unique index if not exists uniq_waitlist_email on public.waitlist_signups ((lower(email)));

-- Enable Row Level Security
alter table public.waitlist_signups enable row level security;

-- Create policy for service role inserts only
create policy "insert via service role only"
on public.waitlist_signups
for insert
to service_role
with check (true);
```

## 5. Test Your Setup

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)

3. Try submitting an email through the form

4. Check your Supabase dashboard → **Table Editor** → **waitlist_signups** to see the entry

## 6. Run Tests

Verify your configuration works:

```bash
npm test
```

## 🔧 What's Already Set Up

✅ **Supabase Client**: Centralized in `src/lib/supabase.ts`
✅ **Server Action**: Email subscription in `src/app/actions/subscribe.ts`
✅ **Form Validation**: Using Zod schema validation
✅ **Bot Protection**: Honeypot fields and timing checks
✅ **Disposable Email Filtering**: Blocks temporary email domains
✅ **Error Handling**: Comprehensive error states and user feedback

## 🚨 Troubleshooting

### "Missing environment variables" error

- Check that `.env.local` exists and has correct values
- Restart your dev server after adding environment variables

### "Service role key not found" error

- Verify `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Make sure you're using the **service_role** key, not the anon key

### Database connection issues

- Check your Supabase project is active
- Verify the URL format: `https://project-id.supabase.co`
- Ensure the table was created successfully

### Email already exists error

- This is expected behavior for duplicate emails
- The form will show "You're already on the list!"

## 📊 Monitoring

- **Supabase Dashboard**: Monitor database usage and performance
- **Logs**: Check server logs for any errors
- **Table Data**: View submissions in real-time via Table Editor

## 🔒 Security Features

- **Row Level Security**: Only service role can insert data
- **Honeypot Protection**: Hidden fields to catch bots
- **Timing Validation**: Prevents automated submissions
- **Disposable Email Filtering**: Blocks temporary email services
- **IP and User Agent Logging**: For analytics and abuse prevention

## 🎯 Next Steps

Once everything is working:

1. Deploy to production
2. Set up production environment variables
3. Consider adding email notifications
4. Add analytics tracking
5. Set up backup and monitoring

---

Your waitlist is now ready to collect emails! 🎉
