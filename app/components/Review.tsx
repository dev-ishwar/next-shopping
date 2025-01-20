import { ReviewType } from "../lib/types";
import Card from "./Card";

type PropsType = {
    review: ReviewType
}

const getNameInitials = (name: string) => {
    return name.split(" ").reduce((prev, word) => prev + word[0].toUpperCase(), "");
}

const Review = ({ review }: PropsType) => {
    return (
        <Card classes="hover:shadow-2xl hover:border-[--darker-color] group transition-all duration-500">
            <article className="flex flex-col gap-2 ">
                <div className="flex gap-3 items-center">
                    <div className="border border-[currentColor] group-hover:border-[--darker-color] rounded-full p-2 min-w-5 min-h-5 text-center align-middle">{getNameInitials(review.reviewerName)}</div>
                    <h2 className="group-hover:text-[--darker-color]">{review.reviewerName}</h2>
                </div>
                <p className="font-semibold">{review.comment}</p>
                <p className="text-sm">{review.rating} / 5</p>
                <p className="text-sm">Reviewed on {new Date(review.date).toLocaleString()}</p>
            </article>
        </Card>
    )
}

export default Review;