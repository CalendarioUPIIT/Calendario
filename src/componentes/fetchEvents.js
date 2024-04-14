import supabase from "../config/supabaseClient";

const selectEvents = async () => {
  const { data, error } = await supabase
    .from("eventos")
    .select("*")
    .eq("id", "ca3be9f9-9269-4d6d-b27c-456a0b3d9f66");

  if (error) {
    console.error("Error fetching smoothies:", error);
    return null;
  }
  return data;
};

export default selectEvents;
