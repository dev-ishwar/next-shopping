const Footer = () => {
    const year = new Date().getFullYear();
    const content = (
        <div className="flex justify-between p-5">
                <p>Next Shopping &copy; {year}</p>
                <p>Made with ❤️ by dev-ishwar</p>
            </div>
    )

    return (
        <footer className="mt-auto">
            {content}
        </footer>
    )
}
export default Footer;