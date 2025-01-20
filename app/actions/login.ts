'use server';

import { createClient } from "@/app/utils/supabase/server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthError, type Provider } from '@supabase/supabase-js';
import { headers } from "next/headers";

export const login = async (_prevState: string | undefined, formData: FormData) => {
    const supabase = await createClient();
    // TODO: Add type checking and validation
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
        if (error instanceof AuthError) {
            return error.message;
        }
        return 'Something went wrong!'
    }
    const header = await headers();
    header.get('ir;')
    revalidatePath('/', 'layout');
    redirect('/');
}

export const singup = async (_prevState: string | undefined, formData: FormData) => {
    const supabase = await createClient();

    // TODO: Add type checking and validation
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        data: {
            display_name: 'Ishwar Singh'
        }
    }

    const { error } = await supabase.auth.signUp(data);
    if (error) {
        if (error instanceof AuthError) {
            return error.message;
        }
        return 'Something went wrong!'
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

export const logout = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
    revalidatePath('/', 'layout');
    redirect('/');
}

export const socialLogin = async (provider: Provider) => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: 'http://localhost:3000/api/auth/callback',
            queryParams: {
                access_type: 'offline',
                prompt: 'consent'
            }
        }
    })

    if (data.url) redirect(data.url);
}