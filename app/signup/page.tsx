'use client';

import { useActionState } from 'react';
import { singup } from '../actions/login';
import LoginSignupForm from '../components/auth/LoginSignup';
import Link from 'next/link';

const LoginPage = () => {
    const [error, formAction, isPending] = useActionState(singup, undefined);

    return (
        <main className='grid place-content-center'>
            <LoginSignupForm
                error={error}
                isPending={isPending}
                action={formAction}
                btnText='Signup'
                footerLink={
                    <p className='text-center'>
                        <span>Have an account ?</span>
                        <Link href={'/login'} className='ml-2 underline'>Login</Link>
                    </p>
                }
            />
        </main>
    );
};

export default LoginPage;