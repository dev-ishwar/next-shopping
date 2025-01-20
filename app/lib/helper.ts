import Stripe from "stripe";

export const currencyFormatter = (amount: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", currencyDisplay: 'symbol' }).format(amount);
}

export const convertToTitleCase = (text: string, separator: string) => {
    return text.split(separator).map(text => text.at(0)?.toUpperCase() + text.slice(1)).join(" ");
}

export const formatAmountForStripe = (amount: number, currency: string): number => {
    const numberForamt = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    });

    const parts = numberForamt.formatToParts(amount);
    let zeroDecimalCurrency: boolean = true;
    for (const part of parts) {
        if (part.type === 'decimal') {
            zeroDecimalCurrency = false;
        }
    }

    return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

export const formatShippingAddress = (address: Stripe.Address | null | undefined): string => {
    if (!address) return "";
    const line1 = address.line1 ? `${address.line1}, ` : null;
    const line2 = address.line2 ? `${address.line2}, ` : null;
    const formatted = `${line1}${line2} ${address.city}, ${address.state}, ${address.country}, ${address.postal_code}`;
    return formatted;
}

// Convert stripe amount - cents to dollors 
export const convertCentsToDollor = (amount: number | null) => {
    if(!amount) return null;
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    return formatter.format(amount / 100);
}