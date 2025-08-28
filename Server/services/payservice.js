import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET);

export const createPaymentIntent = async (amount, currency = "usd") => {
  return await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: { enabled: true },
  });
};
