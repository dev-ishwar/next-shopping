// This is a singleton to ensure we only instantiate stripe only once

import { Stripe, loadStripe } from "@stripe/stripe-js";

type StripePromiseType = Promise<Stripe | null>;
let stripePromise: StripePromiseType;

const getStripe = (): StripePromiseType => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    }

    return stripePromise;
}

export default getStripe;