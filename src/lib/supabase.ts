import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const saveEmail = async (email: string) => {
  // First check if email exists
  const { data: existing } = await supabase
    .from("waitlist")
    .select()
    .eq("email", email)
    .single();

  if (existing) {
    throw new Error("EMAIL_EXISTS");
  }

  // If email doesn't exist, insert it
  const { data, error } = await supabase.from("waitlist").insert([{ email }]);

  if (error) throw error;
  return data;
};
