const SUPABASE_URL = "https://ojvzqsxfdaknxdawffhu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_O1hvQrgIyHW5XYgaWcygmQ_JaX9VI-T";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
