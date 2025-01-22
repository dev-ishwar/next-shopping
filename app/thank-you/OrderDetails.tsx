'use client';

import Link from "next/link";
import useCart from "../hooks/useCart";
import { useEffect } from "react";

type PropsType = {
    email: string
}

const OrderDetails = ({ email }: PropsType) => {
    const { dispatch, REDUCER_ACTIONS } = useCart();

    useEffect(() => {
        // Clear cart details once order is placed successfully.
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    }, [])

    return (
        <>
            <p>
                Please check you email ({email}) for shipping details.
            </p>
            <Link
                className="border border-[currentColor] inline-block px-3 py-1 mt-5 hover:bg-[--button-hover] rounded-sm"
                href={'/'}
            >
                Back to Home
            </Link>
        </>
    )
}

export default OrderDetails;