
// Loading animation
export const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

// export function CardSkeleton() {
//     return (
//         <div
//             className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm h-[400px] w-[260px]`}
//         >
//             <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
//                 <div className="h-7 w-20 rounded-md bg-gray-100" />
//             </div>
//             <div className="flex p-4">
//                 <div className="h-6 w-28 rounded-md bg-gray-200 text-sm font-medium" />
//             </div>
//         </div>
//     );
// }

const CardSkeleton = () => {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-md shadow-sm`}>
            <div className="bg-white min-h-[400px] min-w-[250px]">
                <div className="min-h-[250px] bg-gray-50 mb-2" />
                <div className="flex flex-col gap-3">
                    <div className="min-h-[100px] bg-gray-200" />
                    <div className="min-h-[50px] bg-gray-100" />
                </div>
            </div>
        </div>
    )
}

const ProductsListSkeleton = () => {
    return (
        <section className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </section>

    )
}

export default ProductsListSkeleton;