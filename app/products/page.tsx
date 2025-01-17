import ProductCard from "../components/ProductCard";
import { fetchAllProducts } from "../lib/data-service";
import { ProductType } from "../lib/types";

const Products = async () => {
    const { products } = await fetchAllProducts() as { products: ProductType[] };

    return (
        <main className="p-5">
            <h1 className="text-2xl mb-5">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </main>
    )
}

export default Products;