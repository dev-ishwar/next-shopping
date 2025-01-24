import Link from "next/link";
import { ProductType } from "../lib/types";
import Image from "next/image";

type PropsType = {
    products: ProductType[]
}

const SearchResults = ({ products }: PropsType) => {
    return (
        <ul
            className="max-h-[300px] overflow-y-auto 
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-[--accent-color]
                [&::-webkit-scrollbar-thumb]:bg-[--darker-color]
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:rounded-full
        ">
            {

                products.map(product => (
                    <li key={product.id} className="my-2 p-1 shadow-sm hover:shadow-md hover:shadow-[--darker-color] transition-all first:mt-5">
                        <Link href={`/products/${product.id}`} replace className="w-full flex gap-2">
                            {
                                product.thumbnail &&
                                <Image src={product.thumbnail} width={30} height={30} alt="product img" />
                            }
                            <span>{product.title}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default SearchResults;