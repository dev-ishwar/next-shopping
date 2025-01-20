import Stripe from "stripe"

const baseUrl = process.env.BASE_URL;
export const sendEmailReceipt = (checkoutSession: Stripe.Checkout.Session) => {
    fetch(`${baseUrl}/api/mail`, {
        method: 'POST',
        body: JSON.stringify(checkoutSession)
    })
        .then(res => {
            console.log('mail res: ', res)
        })
        .catch(error => {
            console.error('mail err: ', error)
        })
}