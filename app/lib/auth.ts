import { createClient } from "@/app/utils/supabase/server";

export const getAuthUser = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    return { data, error };
}