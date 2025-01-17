import { fetchProductsByCategory } from "@/app/lib/data-service";
import { convertToTitleCase } from "@/app/lib/helper";
import { ProductType } from "@/app/lib/types";
import ProductsList from "./ProductsList";
import { Suspense } from "react";
import ProductsListSkeleton from "@/app/components/skeletons/ProductsListSkeleton";

type PropsType = {
    params: Promise<{ category: string }>
}

const Category = async ({ params }: PropsType) => {
    const category = (await params).category;
    const searchParams = new URLSearchParams();
    searchParams.set('select', "id,title,description,thumbnail,price,rating")
    const productsPromise = fetchProductsByCategory(category, searchParams) as Promise<{ products: ProductType[] }>;

    return (
        <main>
            <h2 className="text-xl font-bold mb-3">{convertToTitleCase(category, "-")} Products</h2>
            <Suspense fallback={<ProductsListSkeleton />}>
                <ProductsList productsPromise={productsPromise} />
            </Suspense>
        </main>
    )
}

export default Category;