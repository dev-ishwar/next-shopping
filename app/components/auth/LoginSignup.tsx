import Card from "../Card";
import PasswordField from "./PasswordField";
import SocialLogin from "./SocialLogin";

type PropsType = {
    error?: string,
    isPending: boolean,
    action: (payload: FormData) => void,
    btnText: 'Login' | 'Signup',
    footerLink: React.ReactElement
}

const LoginSignupForm = ({ error, isPending, action, btnText, footerLink }: PropsType) => {
    return (
        <Card classes="w-[300px]">
            <form className="">
                {error && <p className="text-red-900 font-semibold text-center mb-2">{error}</p>}
                <div className="flex flex-col mb-3">
                    <label htmlFor="email" className="mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="bg-transparent border placeholder:text-sm px-2 py-1 border-[currentColor] rounded-sm focus-within:outline-[--darkerColor]"
                        placeholder="jane-doe@email.com"
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="password" className="mb-2">Password</label>
                    <PasswordField />
                </div>
                <button
                    type="submit"
                    formAction={action}
                    aria-disabled={isPending}
                    className="border px-3 py-1 border-[currentColor] rounded-sm mx-auto block my-6 hover:bg-[--button-hover]"
                >
                    {btnText}
                </button>
                <div>{footerLink}</div>
                <SocialLogin />
            </form>
        </Card>
    )
}

export default LoginSignupForm;

