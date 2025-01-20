'use client';
import { useActionState } from 'react';
import { login } from '../actions/login';
import LoginSignupForm from '../components/auth/LoginSignup';
import Link from 'next/link';

const LoginPage = () => {
    const [error, formAction, isPending] = useActionState(login, undefined);

    return (
        <main className='grid place-content-center'>
            <LoginSignupForm
                error={error}
                isPending={isPending}
                action={formAction}
                btnText='Login'
                footerLink={
                    <p className='text-center'>
                        <span>Don&apos;t have account ?</span>
                        <Link href={'/signup'} className='ml-2 underline'>Signup</Link>
                    </p>
                }
            />
        </main>
    );
};

export default LoginPage;