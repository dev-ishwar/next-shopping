import { convertCentsToDollor, formatShippingAddress } from "@/app/lib/helper";
import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text
} from "@react-email/components";
import * as React from "react";
import Stripe from "stripe";

const baseUrl = process.env.BASE_URL ?? "";

type OrderedProductsListProps = {
    line_items: Stripe.ApiList<Stripe.LineItem> | undefined
}

type ShoppingReceiptEmailProps = {
    checkout: Stripe.Checkout.Session
}

const OrderedProductsList = ({ line_items }: OrderedProductsListProps) => {
    if (!line_items) return null;
    return (
        <>
            {line_items.data.map(item => (
                <React.Fragment key={item.id}>
                    <Row >
                        {/* <Column>
                        <Img
                            src={`${baseUrl}/static/nike-product.png`}
                            alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                            style={{ float: "left" }}
                            width="260px"
                        />
                    </Column> */}
                        <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                            <Text style={{ ...paragraph, fontWeight: "500" }}>
                                {item.description}
                            </Text>
                            <Text style={global.text}>Qty: {item.quantity}</Text>
                            <Text style={global.text}>Amount: {convertCentsToDollor(item.amount_total)}</Text>
                        </Column>
                    </Row>
                    <Hr />
                </React.Fragment>
            ))}
        </>
    )
}

const year = new Date().getFullYear();
export const ShoppingReceiptEmailTemplate = ({ checkout }: ShoppingReceiptEmailProps) => {
    checkout = {
        "id": "cs_test_a1hUPWWUZWmAub1jtn4W9pg10pyP9wruDw0HDYcJWyxyZuSz1YYGJ4mzc4",
        "object": "checkout.session",
        "adaptive_pricing": {
            "enabled": false
        },
        "after_expiration": null,
        "allow_promotion_codes": null,
        "amount_subtotal": 189999,
        "amount_total": 189999,
        "automatic_tax": {
            "enabled": false,
            "liability": null,
            "status": null
        },
        "billing_address_collection": null,
        "cancel_url": "http://localhost:3001/cart?ref=checkout",
        "client_reference_id": null,
        "client_secret": null,
        "consent": null,
        "consent_collection": null,
        "created": 1737309789,
        "currency": "usd",
        "currency_conversion": null,
        "custom_fields": [

        ],
        "custom_text": {
            "after_submit": null,
            "shipping_address": null,
            "submit": null,
            "terms_of_service_acceptance": null
        },
        "customer": null,
        "customer_creation": "if_required",
        "customer_details": {
            "address": {
                "city": "Saharanpur",
                "country": "IN",
                "line1": "madan enclave colony",
                "line2": "Malhipur road",
                "postal_code": "247001",
                "state": "UP"
            },
            "email": "panwarashu40@gmail.com",
            "name": "Ishwar Singh",
            "phone": "+918797231234",
            "tax_exempt": "none",
            "tax_ids": [

            ]
        },
        "customer_email": null,
        "expires_at": 1737396188,
        "invoice": null,
        "invoice_creation": {
            "enabled": false,
            "invoice_data": {
                "account_tax_ids": null,
                "custom_fields": null,
                "description": null,
                "footer": null,
                "issuer": null,
                "metadata": {

                },
                "rendering_options": null
            }
        },
        "line_items": {
            "object": "list",
            "data": [
                {
                    "id": "li_1Qj2q0C1vWAPFkLVbUPJxdFh",
                    "object": "item",
                    "amount_discount": 0,
                    "amount_subtotal": 189999,
                    "amount_tax": 0,
                    "amount_total": 189999,
                    "currency": "usd",
                    "description": "Annibale Colombo Bed",
                    "price": {
                        "id": "price_1Qj2q0C1vWAPFkLVzD9ToVf1",
                        "object": "price",
                        "active": false,
                        "billing_scheme": "per_unit",
                        "created": 1737309788,
                        "currency": "usd",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {

                        },
                        "nickname": null,
                        "product": "prod_RcHObEsjqcZS1h",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 189999,
                        "unit_amount_decimal": "189999"
                    },
                    "quantity": 1
                },
                {
                    "id": "li_1Qj2q0C1vWAPFkLVbUPJxdFh",
                    "object": "item",
                    "amount_discount": 0,
                    "amount_subtotal": 189999,
                    "amount_tax": 0,
                    "amount_total": 189999,
                    "currency": "usd",
                    "description": "Annibale Colombo Bed",
                    "price": {
                        "id": "price_1Qj2q0C1vWAPFkLVzD9ToVf1",
                        "object": "price",
                        "active": false,
                        "billing_scheme": "per_unit",
                        "created": 1737309788,
                        "currency": "usd",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {

                        },
                        "nickname": null,
                        "product": "prod_RcHObEsjqcZS1h",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 189999,
                        "unit_amount_decimal": "189999"
                    },
                    "quantity": 1
                }
            ],
            "has_more": false,
            "url": "/v1/checkout/sessions/cs_test_a1hUPWWUZWmAub1jtn4W9pg10pyP9wruDw0HDYcJWyxyZuSz1YYGJ4mzc4/line_items"
        },
        "livemode": false,
        "locale": null,
        "metadata": {

        },
        "mode": "payment",
        "payment_intent": "pi_3Qj2raC1vWAPFkLV1m8W61nO",
        "payment_link": null,
        "payment_method_collection": "if_required",
        "payment_method_configuration_details": {
            "id": "pmc_1Qi071C1vWAPFkLVBcLp8p9W",
            "parent": null
        },
        "payment_method_options": {
            "card": {
                "request_three_d_secure": "automatic"
            }
        },
        "payment_method_types": [
            "card",
            "link",
            "amazon_pay"
        ],
        "payment_status": "paid",
        "phone_number_collection": {
            "enabled": true
        },
        "recovered_from": null,
        "saved_payment_method_options": null,
        "setup_intent": null,
        "shipping_address_collection": {
            "allowed_countries": [
                "IN"
            ]
        },
        "shipping_cost": null,
        "shipping_details": {
            "address": {
                "city": "Saharanpur",
                "country": "IN",
                "line1": "madan enclave colony",
                "line2": "Malhipur road",
                "postal_code": "247001",
                "state": "UP"
            },
            "name": "Ishwar Singh"
        },
        "shipping_options": [

        ],
        "status": "complete",
        "submit_type": "pay",
        "subscription": null,
        "success_url": "http://localhost:3001/thank-you?session_id={CHECKOUT_SESSION_ID}",
        "total_details": {
            "amount_discount": 0,
            "amount_shipping": 0,
            "amount_tax": 0
        },
        "ui_mode": "hosted",
        "url": null
    }
    const { customer_details, line_items } = checkout;
    const ordered_at = new Date(checkout.created * 1000).toLocaleString();

    return (
        <Html>
            <Head />
            <Preview>Get your order summary, estimated delivery date and more</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* <Section style={track.container}>
                        <Row>
                            <Column>
                                <Text style={global.paragraphWithBold}>Tracking Number</Text>
                                <Text style={track.number}>1ZV218970300071628</Text>
                            </Column>
                            <Column align="right">
                                <Link style={global.button}>Track Package</Link>
                            </Column>
                        </Row>
                    </Section>
                    <Hr style={global.hr} /> */}
                    <Section style={message}>
                        <Img
                            src={`${baseUrl}/logo.png`}
                            width="66"
                            height="22"
                            alt="Logo"
                            style={{ margin: "auto" }}
                        />
                        <Heading style={global.heading}>It's On Its Way.</Heading>
                        <Text style={global.text}>
                            Thank you for your order.
                        </Text>
                        <Text style={{ ...global.text, marginTop: 24 }}>
                            Please find your order details below.
                        </Text>
                    </Section>
                    <Hr style={global.hr} />
                    <Section style={global.defaultPadding}>
                        <Text style={adressTitle}>Shipping to: {customer_details?.name}</Text>
                        <Text style={global.text}>Phone: {customer_details?.phone}</Text>
                        <Text style={{ ...global.text, fontSize: 14 }}>
                            {formatShippingAddress(customer_details?.address)}
                        </Text>
                    </Section>
                    <Hr style={global.hr} />
                    <Section
                        style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
                    >
                        <OrderedProductsList line_items={line_items} />
                        <Row >
                            <Text style={global.paragraphWithBold}>Order Total: {convertCentsToDollor(checkout.amount_total)}</Text>
                        </Row>
                    </Section>
                    <Hr style={global.hr} />
                    <Section style={global.defaultPadding}>
                        <Row style={{ display: "inline-flex", marginBottom: 40 }}>
                            <Column style={{ width: "170px" }}>
                                <Text style={global.paragraphWithBold}>Order Number</Text>
                                <Text style={track.order} title={checkout.id}>{checkout.id}</Text>
                            </Column>
                            <Column>
                                <Text style={global.paragraphWithBold}>Order Date</Text>
                                <Text style={track.number}>{ordered_at}</Text>
                            </Column>
                        </Row>
                    </Section>
                    <Hr style={global.hr} />
                    <Hr style={{ ...global.hr, marginTop: "12px" }} />
                    <Section style={paddingY}>
                        <Row>
                            <Link href={baseUrl} style={{ ...global.button, margin: 'auto' }}>Next Shopping</Link>
                        </Row>
                        <Row>
                            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
                                Please contact us if you have any questions. (If you reply to this
                                email, we won't be able to see it.)
                            </Text>
                        </Row>
                        <Row>
                            <Text style={footer.text}>
                                Next Shopping © {year}, All Rights Reserved.
                            </Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
};

export default ShoppingReceiptEmailTemplate;

const paddingX = {
    paddingLeft: "40px",
    paddingRight: "40px",
};

const paddingY = {
    paddingTop: "22px",
    paddingBottom: "22px",
};

const paragraph = {
    margin: "0",
    lineHeight: "2",
};

const global = {
    paddingX,
    paddingY,
    defaultPadding: {
        ...paddingX,
        ...paddingY,
    },
    paragraphWithBold: { ...paragraph, fontWeight: "bold" },
    heading: {
        fontSize: "32px",
        lineHeight: "1.3",
        fontWeight: "700",
        textAlign: "center",
        letterSpacing: "-1px",
    } as React.CSSProperties,
    text: {
        ...paragraph,
        color: "#747474",
        fontWeight: "500",
    },
    button: {
        border: "1px solid #929292",
        fontSize: "16px",
        textDecoration: "none",
        padding: "10px 0px",
        width: "220px",
        display: "block",
        textAlign: "center",
        fontWeight: 500,
        color: "#000",
    } as React.CSSProperties,
    hr: {
        borderColor: "#E5E5E5",
        margin: "0",
    },
};

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "10px auto",
    width: "600px",
    maxWidth: "100%",
    border: "1px solid #E5E5E5",
};

const track = {
    container: {
        padding: "22px 40px",
        backgroundColor: "#F7F7F7",
    },
    number: {
        margin: "12px 0 0 0",
        fontWeight: 500,
        lineHeight: "1.4",
        color: "#6F6F6F",
    },
    order: {
        margin: "12px 0 0 0",
        fontWeight: 500,
        lineHeight: "1.4",
        color: "#6F6F6F",
        maxWidth: '100px',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
};

const message = {
    padding: "40px 74px",
    textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
    ...paragraph,
    fontSize: "15px",
    fontWeight: "bold",
};

const footer = {
    policy: {
        width: "166px",
        margin: "auto",
    },
    text: {
        margin: "0",
        color: "#AFAFAF",
        fontSize: "13px",
        textAlign: "center",
    } as React.CSSProperties,
};