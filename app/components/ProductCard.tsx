import Image from "next/image";
import { ProductType } from "../lib/types";
import Card from "./Card";
import { currencyFormatter } from "../lib/helper";
import Rating from "./Rating";
import AddToCartButton from "./AddToCartButton";
import { Suspense } from "react";
import { ButtonSkeleton } from "./skeletons/Skeletons";
import Link from "next/link";

type PropsType = {
    product: ProductType
}

const ProductCard = ({ product }: PropsType) => {
    return (
        <Card>
            <article className="flex flex-col justify-center items-center">
                <Link href={`/products/${product.id}`} >
                    <Image
                        src={product.thumbnail}
                        width={200}
                        height={200}
                        alt={product.title}
                        className="mx-auto"
                    />
                    <div className="flex flex-col gap-2 mt-2">
                        <h2 className="font-semibold">{product.title}</h2>
                        <p className="text-md line-clamp-2" title={product.description}>{product.description}</p>
                        <div className="flex justify-between">
                            <span>{currencyFormatter(product.price)}</span>
                            <Rating rating={product.rating} />
                        </div>
                    </div>
                </Link>
                <div className="w-full mt-2">
                    <Suspense fallback={<ButtonSkeleton />}>
                        <AddToCartButton product={product} classes="hover:bg-[--button-hover] transition-all w-full" />
                    </Suspense>
                </div>
            </article>
        </Card>
    )
}

export default ProductCard;
