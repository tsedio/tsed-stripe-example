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

## Start

Add `.env.local` file with the followings lines:

```dotenv
STRIPE_SECRET_KEY=pk_test_5***
STRIPE_WEBHOOK_SECRET=sk_test_5***
```

### Ts.ED

```
yarn start
yarn stripe:forward:tsed
```

### Express

```
yarn start:express
yarn stripe:forward:express
```

### Koa

```
yarn start:koa
yarn stripe:forward:koa
```

### Issue

All example return the followings:

```
Error message: No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? 
```
