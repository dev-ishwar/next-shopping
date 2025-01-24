import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import LoginButton from "./LoginButton";
import SearchIcon from "./SearchIcon";

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center px-5 py-3 mb-5 border-b-2 border-b-[--darker-color] bg-[--darker-color] sticky top-0 z-50">
            <Link href={'/'} passHref className="my-4">
                <Image
                    src={"/logo.png"}
                    width={90}
                    height={58}
                    alt="logo"
                    className=" dark:invert"
                />
                {/* <Image
                    src={"/light.svg"}
                    width={90}
                    height={58}
                    alt="logo"
                    className="block dark:hidden"
                /> */}
            </Link>
            <div className="flex gap-2 ">
                <SearchIcon />
                <LoginButton />
                <CartIcon />
            </div>
        </header>
    )
}

export default Header;