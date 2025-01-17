"use client";

import ProductCard from "@/app/components/ProductCard";
import { ProductType } from "@/app/lib/types";
import { use } from "react";

type PropsType = {
    productsPromise: Promise<{ products: ProductType[] }>
}

const ProductsList = ({ productsPromise }: PropsType) => {
    const { products } = use(productsPromise) as { products: ProductType[] }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {
                products.map(product => (
                    <ProductCard product={product} key={product.id}/>
                ))
            }
        </section>
    )
}

export default ProductsList;