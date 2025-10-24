import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
