import { getAuthUser } from "@/app/lib/auth";
import Button from "../Button";
import { logout } from "@/app/actions/login";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import Image from "next/image";

type CurrentUserPropsType = {
    user: User
}

const CurrentUserDetails = ({ user }: CurrentUserPropsType) => {
    const name = user?.user_metadata?.full_name ?? user?.user_metadata?.display_name;
    const image = user?.user_metadata?.avatar_url;
    return (
        <>
            {
                image &&
                <Image
                    src={image}
                    width={50}
                    height={50}
                    alt="user"
                    className="rounded-full"
                />
            }
            <span className="peer">{name}</span>
        </>
    )
}

const LoginButton = async () => {
    const { data: { user } } = await getAuthUser();

    const content = user ?
        <div className="flex items-center gap-2">
            <CurrentUserDetails user={user} />
            <Button onClick={logout}>Logout</Button>
        </div>
        : <Button>
            <Link href={'/login'}>Login</Link>
        </Button>

    return content;
}

export default LoginButton;