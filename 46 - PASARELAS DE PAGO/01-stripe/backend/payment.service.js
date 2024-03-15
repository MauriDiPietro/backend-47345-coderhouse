import Stripe from "stripe";
import "dotenv/config";

export default class PaymentService {
  constructor() {
    this.stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  }

  async createPaymentIntent(data) {
    return await this.stripe.paymentIntents.create(data);
  }
}
