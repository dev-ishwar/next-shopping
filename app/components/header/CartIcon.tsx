'use client';
import useCart from "@/app/hooks/useCart";
import Link from "next/link";

const CartIcon = () => {
    const { totalItems } = useCart();

    return (
        <div className="flex justify-center items-center relative">
            <span
                className="absolute top-0 px-2 py-1 rounded-full border border-b-0 border-[--accent-color] text-[--light-color]"
            >
                {totalItems}
            </span>
            <Link className="bg-opacity-0 border border-[--accent-color] px-2 py-1 rounded-sm hover:bg-[--button-hover]" href={`/cart`}>
                Cart
            </Link>
        </div>
    )
}

export default CartIcon;