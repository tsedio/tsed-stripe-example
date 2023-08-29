<p style="text-align: center" align="center">
  <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">
  <h1>Ts.ED - cli-test</h1>
  <br />
  <div align="center">
    <a href="https://cli.tsed.io/">Website</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://cli.tsed.io/getting-started.html">Getting started</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://api.tsed.io/rest/slack/tsedio/tsed">Slack</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://twitter.com/TsED_io">Twitter</a>
  </div>
  <hr />
</div>

> An awesome project based on Ts.ED framework

## Installation

Install the stripe CLI: https://stripe.com/docs/stripe-cli

Then:

```sh
yarn install
```

## Start

Add `.env.local` file with the followings lines:

```dotenv
STRIPE_SECRET_KEY=sk_test_5***
STRIPE_WEBHOOK_SECRET=whsec_***
```

`STRIPE_SECRET_KEY` can be retrieved on the Stripe Dashboard here: https://dashboard.stripe.com/test/apikeys

And the `STRIPE_WEBHOOK_SECRET` can be retrieved by using the `stripe forward` (in our example run `stripe:forward`) command:

```sh
yarn stripe:forward

> Ready! You are using Stripe API Version [2020-08-27]. Your webhook signing secret is whsec_***************************** 
```

Copy the `whsec_*****************************` in the `.env.local` on `STRIPE_WEBHOOK_SECRET`.

Then:

```sh
yarn start
```

Finally, you can trigger an event by running this command:

```sh
yarn stripe:trigger
```

### Issue

If you have the followings message, it means you have an issue with your `STRIPE_WEBHOOK_SECRET`.

```sh
Error message: No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? 
```

Please double-check your configuration!
