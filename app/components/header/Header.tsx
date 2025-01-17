import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Header = () => {
    return (
        <header className="flex justify-between px-5 py-3 mb-5 border-b-2 border-b-[--darker-color]">
            <Link href={'/'} passHref>
                <Image
                    src={"/dark.svg"}
                    width={90}
                    height={58}
                    alt="logo"
                    className="hidden dark:block"
                />
                <Image
                    src={"/light.svg"}
                    width={90}
                    height={58}
                    alt="logo"
                    className="block dark:hidden"
                />
            </Link>
            <CartIcon />
        </header>
    )
}

export default Header;