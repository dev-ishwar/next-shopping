'use client';

import Image from "next/image";
import useCart from "../hooks/useCart";
import Card from "./Card";
import CartItem from "./CartItem";
import emptyCartSvg from '@/app/assets/emptyCart.svg';
import Link from "next/link";
import { createCheckoutSession } from "../actions/stripe";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "../utils/supabase/client";

const ShoppingCart = () => {
    const [disableButton, setDisableButton] = useState(false);
    const { cart, dispatch, REDUCER_ACTIONS, totalItems, totalPrice } = useCart();

    const router = useRouter();
    const pathname = usePathname();

    const checkAuthUser = async () => {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            router.push(`/login?from=${pathname}`);
            return;
        };
        return user;
    }

    const onSubmitOrder = async () => {
        setDisableButton(true);

        const user = await checkAuthUser();
        if (!user) return;

        const { url } = await createCheckoutSession(cart, user?.email);
        window.location.assign(url as string)
        setDisableButton(false);
    }

    const content = (
        <div className="flex flex-wrap gap-5 mt-7">
            <div className="flex-1 flex gap-5 overflow-hidden p-5 justify-center flex-col border rounded-md">
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
            <Card classes="max-h-fit basis-[250px]">
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