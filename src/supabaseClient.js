import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://zalesbxvzcpqmywfaqbl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbGVzYnh2emNwcW15d2ZhcWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMzYxNTAsImV4cCI6MjA4MDYxMjE1MH0.DyO2OYzp9W1gcx1PASO34fOxX2jX23rtf9hvcZMrlNk"
);
