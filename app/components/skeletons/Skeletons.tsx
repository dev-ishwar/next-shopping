import { shimmer } from "./ProductsListSkeleton"

export const ButtonSkeleton = () => {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-sm bg-gray-50 w-full min-h-7`}></div>
    )
}