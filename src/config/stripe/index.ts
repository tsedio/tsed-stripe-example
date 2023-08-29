export const stripeConfig = {
  apiKey: String(process.env.STRIPE_SECRET_KEY),
  webhooks: {
    secret: String(process.env.STRIPE_WEBHOOK_SECRET)
  },
  // Stripe options
  apiVersion: "2023-08-16" as any,
}
