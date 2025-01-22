import type { Stripe } from 'stripe';
import { stripe } from '../lib/stripe';
import { sendEmailReceipt } from '../lib/services/shopping-receipt';
import OrderDetails from './OrderDetails';

type PropsType = {
    searchParams: Promise<{ session_id: string }>
}

const ThankYouPage = async ({ searchParams }: PropsType) => {
    const session_id = (await searchParams).session_id;
    if (!session_id) throw new Error('Please provide a valid session id');

    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.retrieve(session_id, {
            expand: ['line_items']
        })

    sendEmailReceipt(checkoutSession);

    return (
        <main className="grid place-content-center mt-10 ">
            <div className='shadow rounded-md shadow-current text-center p-10'>
                <h1 className="text-2xl mb-2">Thank you for your order.</h1>
                <OrderDetails email={checkoutSession.customer_details?.email ?? ""} />
            </div>
        </main>
    )
}

export default ThankYouPage;