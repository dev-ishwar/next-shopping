type PropsType = {
    className?: string,
    children: React.ReactNode,
    onClick?: () => void,
    [k: string]: any
}

const Button = ({ className = "", children, onClick, ...rest }: PropsType) => {
    return (
        <button
            className={`border px-3 py-1 border-[currentColor] rounded-sm mx-auto block my-6 hover:bg-[--button-hover] ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;