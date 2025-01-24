'use client';

import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import { searchProducts } from "../lib/data-service";
import { ProductType } from "../lib/types";
import SearchResults from "../components/SearchResults";
import Card from "../components/Card";
import { useSearchParams } from "next/navigation";

const Search = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const fetchProducts = async () => {
        if (!query) {
            setProducts([]);
            return;
        };

        setLoading(true);

        const params = new URLSearchParams({
            select: 'id,title,thumbnail',
        });
        params.set('q', query);

        try {
            const products: ProductType[] = await searchProducts(params.toString());
            setProducts(products);
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [query])

    return (
        <Card classes="border-0 max-w-[600px] w-[90%] mx-auto">
            <div>
                <SearchInput setQuery={setQuery} />
                <SearchResults products={products} />
                {
                    loading && <p className="text-center my-5">Loading...</p>
                }
            </div>
        </Card>
    )
}

export default Search;