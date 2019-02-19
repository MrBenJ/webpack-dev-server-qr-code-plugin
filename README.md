# QR Codes For Local Development

[![Greenkeeper badge](https://badges.greenkeeper.io/MrBenJ/webpack-dev-server-qr-code-plugin.svg)](https://greenkeeper.io/)

![Demo](demo.gif)

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
    port: 9000,

    /** Your 'host' value must be '0.0.0.0' for this to work */
    host: '0.0.0.0'
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

The plugin will print a QR code to your terminal when you first run the app, with your `local IP`.

Make sure your mobile device is on the same network as your computer, and you should be set!

### Additional Options

You can pass in an object to the constructor class like this:

```
module.exports = {
  /** ... */
  plugins: [
    new WebpackQRCodePlugin({ size: 'small' })
  ]
}
```

The above code will generate a smaller QR code on your terminal. Here's the allowed options

| key  | Type   | Required? | Description                                                                           | Default Value |
|------|--------|-----------|---------------------------------------------------------------------------------------|---------------|
| size | String | No        | Changes the size of the QR code printed out. Acceptable values are 'small' or 'large' | 'large'       |


Any other options at this time will be ignored. If you put in a value that's not `large` or `small` for size, the plugin will still run, but still output a large sized QR code.


## Hack with me!

Do you like:
* Contributing to Open Source Software?
* Hacking and nerding out on Javascript?
* Alcohol?

If you like one or all of those things, start hacking with me on this project:

1. Clone the repo
2. Install dependencies with `npm install`
3. Open up `src/index.js` and start hackin' away:
4. If you're new to Webpack plugins (this is my first one), check out [this guide from Webpack](https://webpack.js.org/contribute/writing-a-plugin/) on how to write a webpack.

This is a pretty small and fun little plugin, so contributions are welcome from anyone and everyone, regardless of skill level, gender, race, etc. Everyone is welcome to use and hack away on this as they please :).

If you contribute, I will buy you an alcoholic beverage of your choice, so what are you waiting for? ;)

### Unit tests

I loves me some unit testing. Run the tests with `npm test` and bingus bongus you is done.

If you break something (no worries friend! Happens to us all :D) CircleCI _should_ catch it on your branch/fork.

