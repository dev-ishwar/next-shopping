import { socialLogin } from "@/app/actions/login";
import Button from "../Button";

const SocialLogin = () => {
    return (
        <>
            <hr className="mt-4 border-[currentColor]" />
            <Button
                className="rounded-full mb-2 bg-[--foreground] text-[--background]"
                onClick={() => socialLogin('google')}
                type='button'
            >
                Sign in with Google
            </Button>
        </>
    )
}

export default SocialLogin;