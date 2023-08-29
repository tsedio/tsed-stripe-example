import {Context, Controller, OverrideProvider, Post, RawBodyParams} from "@tsed/common";
import {Stripe} from "stripe";
import {Constant, Inject} from "@tsed/di";
import {WebhookEvent, WebhookEventMiddleware, WebhookEventOptions} from "@tsed/stripe";
import {HeaderParams} from "@tsed/platform-params";
import {BadRequest, InternalServerError} from "@tsed/exceptions";

export const STRIPE_WEBHOOK_EVENT = "strip_webhook_event";
export const STRIPE_WEBHOOK_SIGNATURE = "strip_webhook_signature";

@OverrideProvider(WebhookEventMiddleware)
export class CustomWebhookEventMiddleware {
  @Inject()
  protected stripe: Stripe;

  @Constant("stripe.webhooks")
  protected webhooks: WebhookEventOptions;

  use(@HeaderParams("stripe-signature") signature: string, @RawBodyParams() body: Buffer, @Context() ctx: Context): any {
    const {secret, tolerance}: WebhookEventOptions = {
      ...this.webhooks,
      ...ctx.endpoint.store.get(WebhookEventMiddleware)
    };

    if (!secret) {
      throw new InternalServerError(
        "Missing Stripe webhooks secret key. You can get this in your dashboard. See: https://dashboard.stripe.com/webhooks."
      );
    }

    try {//No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe?
      const result = this.stripe.webhooks.constructEvent(body, signature, secret, tolerance)

      ctx.set(STRIPE_WEBHOOK_SIGNATURE, signature);
      ctx.set(STRIPE_WEBHOOK_EVENT, result);
    } catch (err) {
      throw new BadRequest(`Stripe webhook error: ${err.message}`, err);
    }
  }
}


@Controller("/webhooks")
export class StripWebhookController {
  @Inject()
  protected stripe: Stripe;

  @Post("/callback")
  successPaymentHook(@WebhookEvent({tolerance: 10}) event: Stripe.Event, @Context() ctx: Context) {
    ctx.logger.info({name: "Webhook success", event});

    return {received: true};
  }

  // with custom webhook options
  // @Post("/callback2")
  // successPaymentHook(@WebhookEvent({secret: "....."}) event: Stripe.Event, @Context() ctx: Context) {
  //   ctx.logger.info({name: "Webhook success", event});
  //
  //   return {received: true};
  // }
}
