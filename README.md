# QR Codes For Local Development

Need to test your site on a device?

Stop typing out IP addresses and jump into the future with QR Codes!

## Getting Started

Install it!
```sh
npm install webpack-dev-server-qr-code
```

Note: You must be using the `devServer` options inside of your webpack config for this to work!

In your Webpack config, add this line:
```js
const WebpackQRCodePlugin = require('webpack-dev-server-qr-code');

module.exports = {
  /** This option must be present in your config */
  devServer: {
    /** port MUST be specified */
    port: 9000
  },
  /* ... */
  plugins: [
    /** your plugins */
    new WebpackQRCodePlugin()
    /** your other plugins */
  ]
};
```

Boom! You're finished!
