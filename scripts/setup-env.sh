#!/bin/bash

# WeWandr Waitlist Environment Setup Script

echo "🚀 Setting up environment variables for WeWandr Waitlist"
echo ""

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists. Backing up to .env.local.backup"
    cp .env.local .env.local.backup
fi

# Create .env.local file
cat > .env.local << 'EOF'
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Optional: Analytics
NEXT_PUBLIC_ENABLE_ANALYTICS=false
EOF

echo "✅ Created .env.local file"
echo ""
echo "📝 Next steps:"
echo "1. Go to https://supabase.com and create a new project"
echo "2. Get your API keys from Settings → API"
echo "3. Replace the placeholder values in .env.local with your actual keys"
echo "4. Run 'npm run dev' to start your development server"
echo ""
echo "🔑 Required environment variables:"
echo "   - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL"
echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY: Your public anon key"
echo "   - SUPABASE_SERVICE_ROLE_KEY: Your service role key (keep secret!)"
echo ""
echo "📚 See setup-supabase.md for detailed instructions"
