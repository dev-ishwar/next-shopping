'use client';

import { ProductType } from "../lib/types";
import useCart from "../hooks/useCart";
import { KeyboardEvent, MouseEvent } from "react";

type PropsType = {
    product: ProductType,
    classes?: string
}

const AddToCartButton = ({ product, classes }: PropsType) => {
    const { cart, dispatch, REDUCER_ACTIONS } = useCart();

    const onAddToCart = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
    }

    const itemInCart = cart.some(item => item.id === product.id);

    return (
        <div>
            {
                itemInCart
                    ? <p className="flex items-center gap-2 my-2">
                        <span>Item in cart</span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
                        </svg>
                    </p>
                    : null
            }
            <button
                className={`border border-[currentColor] px-2 py-1 rounded-sm ${classes ?? ''}`}
                onClick={onAddToCart}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default AddToCartButton;