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