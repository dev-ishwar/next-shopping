import { Resend } from 'resend';
import ShoppingReceiptEmailTemplate from '@/emails/shopping-receipt';
import Stripe from 'stripe';

const resend = new Resend(process.env.RESEND_API_KEY);
// TODO: Add rate limit
export const POST = async (req: Request) => {
    const checkout: Stripe.Checkout.Session = await req.json();
    const customerEmail = checkout.customer_details?.email as string;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Next Shopping <noreply@ishwar.tech>',
            to: [customerEmail],
            subject: 'Order placed Successfully',
            react: ShoppingReceiptEmailTemplate({ checkout })
        })

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}