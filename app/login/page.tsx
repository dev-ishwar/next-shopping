'use client';
import { useActionState } from 'react';
import { login } from '../actions/login';
import LoginSignupForm from '../components/auth/LoginSignup';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {
    const searchParams = useSearchParams();
    const from = searchParams.get('from');
    const bindLoginWithFrom = login.bind(null, from);
    const [error, formAction, isPending] = useActionState(bindLoginWithFrom, undefined);

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