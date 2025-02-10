import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const saveEmail = async (email: string) => {
  const { data, error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) throw error;
  return data;
};
