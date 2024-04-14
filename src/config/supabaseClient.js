import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://drnzloceekiitengfywt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRybnpsb2NlZWtpaXRlbmdmeXd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNjk2NjcsImV4cCI6MjAyODY0NTY2N30.e90K-NiJIE6Y-KScOXz31uPYRijczqZoqdxohWRkocY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
