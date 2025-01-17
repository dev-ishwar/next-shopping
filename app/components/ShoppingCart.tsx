'use client';

import Image from "next/image";
import useCart from "../hooks/useCart";
import Card from "./Card";
import CartItem from "./CartItem";
import emptyCartSvg from '@/app/assets/emptyCart.svg';
import Link from "next/link";
import { createCheckoutSession } from "../actions/stripe";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { NAVIGATION_REF } from "../lib/config";

const ShoppingCart = () => {
    const [disableButton, setDisableButton] = useState(false);
    const { cart, dispatch, REDUCER_ACTIONS, totalItems, totalPrice } = useCart();
    const searchParams = useSearchParams();

    const onSubmitOrder = async () => {
        setDisableButton(true);
        const { url } = await createCheckoutSession(cart);
        window.location.assign(url as string)
        setDisableButton(false);
        // dispatch({ type: REDUCER_ACTIONS.SUBMIT })
    }

    useEffect(() => {
        const ref = searchParams.get('ref');
        if (ref === NAVIGATION_REF.CHECKOUT) dispatch({ type: REDUCER_ACTIONS.HYDRATE });
    }, [])

    const content = (
        <div className="flex gap-5 mt-7">
            <div className="flex-grow flex gap-5 overflow-hidden p-5 justify-center flex-col border rounded-md">
                {
                    cart.length
                        ?
                        cart.map(item => {
                            return (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    dispatch={dispatch}
                                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                                />
                            )
                        })
                        : <p className="self-center text-center">
                            <Image
                                src={emptyCartSvg}
                                width={50}
                                height={50}
                                alt="icon"
                                className="mx-auto"
                            />
                            Nothing in the cart yet.<br />
                            <Link href={'/'} className="underline">Back to Home</Link>
                        </p>
                }
            </div>
            <Card classes="max-h-fit flex-grow-2 basis-[250px]">
                <div className="">
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                    <button
                        className="border w-full disabled:cursor-not-allowed mt-2"
                        disabled={!totalItems || disableButton}
                        onClick={onSubmitOrder}
                    >
                        Place Order
                    </button>
                </div>
            </Card>
        </div>
    )

    return content;
}

export default ShoppingCart;