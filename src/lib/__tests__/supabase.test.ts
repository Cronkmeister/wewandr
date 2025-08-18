import { supabaseAdmin } from '../supabase'

describe('Supabase Configuration', () => {
  it('should have valid Supabase URL', () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    expect(url).toBeDefined()
    expect(url).toMatch(/^https:\/\/.*\.supabase\.co$/)
  })

  it('should have service role key', () => {
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    expect(key).toBeDefined()
    expect(key.length).toBeGreaterThan(0)
  })

  it('should initialize admin client', () => {
    expect(supabaseAdmin).toBeDefined()
    expect(supabaseAdmin.from).toBeDefined()
  })
})
