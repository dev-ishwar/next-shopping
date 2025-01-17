
type PropsType = {
    children: React.ReactElement,
    classes?: string
}

const Card = ({ children, classes }: PropsType) => {
    return (
        <div className={`border border-[currentColor] rounded-md p-5 ${classes ?? ""}`}>
            {children}
        </div>
    )
}
export default Card;