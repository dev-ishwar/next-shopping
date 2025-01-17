type PropsType = {
    rating: number
}

const Rating = ({ rating }: PropsType) => {
    return (
        <span>{rating} out of 5</span>
    )
}

export default Rating;