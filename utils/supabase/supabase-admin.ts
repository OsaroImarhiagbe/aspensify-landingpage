// utils/supabase-admin.ts
import { createClient } from '@supabase/supabase-js';

// This client has admin privileges and should only be used in server-side code
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default supabaseAdmin;