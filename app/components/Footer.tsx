import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();
    const content = (
        <div className="flex sm:flex-row flex-col gap-2 justify-between p-5 mt-6 shadow-2xl shadow-[--darker-color]">
            <p>Next Shopping &copy; {year}</p>
            <p>
                Made with ❤️ by &nbsp;
                <Link href={'https://github.com/dev-ishwar'} target="_blank">dev-ishwar</Link>
            </p>
        </div>
    )

    return (
        <footer className="mt-auto">
            {content}
        </footer>
    )
}
export default Footer;