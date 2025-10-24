import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If env vars are missing, don't throw — create a lightweight stub so the app
// can run in development without Supabase configured. This prevents a hard
// crash (white page) while still making it obvious in the console that
// Supabase isn't configured.
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing. Supabase calls will return empty results.');
}

// Minimal stub implementing the chain used in the app:
// supabase.from(...).select(...).eq(...).order(...)
const _stub = {
  from: () => ({
    select: () => ({
      eq: () => ({
        order: async () => ({ data: [], error: null }),
      }),
      order: async () => ({ data: [], error: null }),
    }),
  }),
} as const;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (_stub as unknown as ReturnType<typeof createClient>);

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  client_name: string;
  client_industry: string | null;
  description: string;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  project_date: string | null;
  project_url: string | null;
  featured_image: string;
  technologies: string[];
  features: string[];
  created_at: string;
  updated_at: string;
  is_featured: boolean;
}

export interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
  caption: string | null;
  display_order: number;
  created_at: string;
}
