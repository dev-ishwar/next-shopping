import { createClient } from "@/app/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');

    // if 'next' is in param, use it as redirect url
    const next = searchParams.get('next') ?? '/';
    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error) {
            const forwardedHost = request.headers.get('x-forwarded-host'); // Original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development';

            if (isLocalEnv) {
                return NextResponse.redirect(`${origin}${next}`);
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`);
            } else {
                return NextResponse.redirect(`${origin}${next}`);
            }
        }
    }

    // TODO: return the user to en error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
} 