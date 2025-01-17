import AddToCartButton from "@/app/components/AddToCartButton";
import BackButton from "@/app/components/BackButton";
import ProductImageGallery from "@/app/components/ProductImageGallery";
import Review from "@/app/components/Review";
import { fetchProductById } from "@/app/lib/data-service";
import { currencyFormatter } from "@/app/lib/helper";
import { ProductType } from "@/app/lib/types";
import Link from "next/link";
import { Suspense } from "react";

type PropsType = {
    params: Promise<{ id: string }>
}

const Product = async ({ params }: PropsType) => {
    const id = (await params).id;
    const product: ProductType | null = await fetchProductById(id);

    const content = !product
        ? <p>Unable to fetch product details.</p>
        : <>
            <div className="flex sm:flex-row flex-col gap-5">
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductImageGallery images={product.images} thumbnail={product.thumbnail} />
                </Suspense>
                <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-xl mb-2">{product.title}</h1>
                    <p className="mb-2">{product.description}</p>
                    <p className={`${product.availabilityStatus === 'In Stock' ? 'text-green-950' : 'text-red-950'} text-sm`}>{product.availabilityStatus}</p>
                    <p className="text-sm"><span>Rating: </span>{product.rating}</p>
                    <p className="text-sm">
                        <span>Category: </span>
                        <Link href={`/categories/${product.category}`} className="hover:underline">
                            {product.category}
                        </Link>
                    </p>
                    <p>{currencyFormatter(product.price)}</p>
                    <AddToCartButton product={product} classes="w-fit hover:bg-[--darker-color]" />
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mt-10 mb-7">Product Details</h2>
                <table className="flex text-nowrap overflow-auto">
                    <thead className="flex-1">
                        <tr className="flex flex-col text-left [&>*]:p-2 [&>*]:border [&>*]:border-b-0 last-of-type:border-b">
                            <th scope="row">Brand</th>
                            <th>Return Policy</th>
                            <th>Minimum Order Quantity</th>
                            <th>Weight</th>
                            <th>width</th>
                            <th>height</th>
                            <th>depth</th>
                        </tr>
                    </thead>
                    <tbody className="flex-1">
                        <tr className="flex flex-col [&>*]:p-2 [&>*]:border [&>*]:border-b-0 last-of-type:border-b">
                            <td>{product.brand ?? "-"}</td>
                            <td>{product.returnPolicy ?? "-"}</td>
                            <td>{product.minimumOrderQuantity ?? "-"}</td>
                            <td>{product.weight ?? "-"}</td>
                            <td>{product.dimensions.width ?? "-"}</td>
                            <td>{product.dimensions.height ?? "-"}</td>
                            <td>{product.dimensions.depth ?? "-"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-10">
                <h2 className="text-xl mb-7">Reviews</h2>
                <div className="flex gap-3 flex-wrap">
                    {
                        product.reviews
                            ? product.reviews.map((review, i) => (
                                <Review review={review} key={i + review.reviewerEmail} />
                            ))
                            : <p>No reviews yet.</p>
                    }
                </div>
            </div>
        </>

    return (
        <main className="p-10">
            <BackButton text="Back" classes="mb-5" />
            {content}
        </main>
    )
}

export default Product;