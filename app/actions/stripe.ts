'use server';

import { Stripe } from "stripe";

import { headers } from "next/headers";

import { CURRENCY, STRIPE_UI_MODE } from "../lib/config";
import { formatAmountForStripe } from "../lib/helper";
import { stripe } from '../lib/stripe';
import { CartItemType } from "../context/CartProvider";

export const createCheckoutSession = async (cart: CartItemType[]): Promise<{ client_secret: string | null, url: string | null }> => {
    const ui_mode = STRIPE_UI_MODE as Stripe.Checkout.SessionCreateParams.UiMode;
    const origin = (await headers()).get('origin') as string;

    const lineItems = cart.map(item => ({
        quantity: item.qty,
        price_data: {
            currency: CURRENCY,
            product_data: {
                name: item.title,
                images: [item.thumbnail]
            },
            unit_amount: formatAmountForStripe(
                Number(item.price),
                CURRENCY,
            ),
        },
    }))

    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create({
            mode: 'payment',
            submit_type: 'pay',
            line_items: lineItems,
            ui_mode,
            success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cart?ref=checkout`,
            shipping_address_collection: {
                allowed_countries: ['US', 'IN'],
            },
        })

    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url
    }
}

export const createPaymentIntent = async (amount: number): Promise<{ client_secret: string }> => {
    const paymentIntent: Stripe.PaymentIntent =
        await stripe.paymentIntents.create({
            amount: formatAmountForStripe(amount, CURRENCY),
            automatic_payment_methods: { enabled: true },
            currency: CURRENCY
        })

    return { client_secret: paymentIntent.client_secret as string }
}