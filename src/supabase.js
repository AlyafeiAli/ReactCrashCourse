import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qfishrxbsosycpmpuhys.supabase.co";
const supabaseKey = "rr4DU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
