const qrCode = require('qrcode-terminal');
const internalIp = require('internal-ip');

class PrintQRCodePlugin {
  apply(compiler) {
    if (compiler.options.devServer) {
      let didFire = false;
      compiler.hooks.done.tap('Print QR Code Plugin', () => {
        if (didFire) {
          return;
        }
        const port = compiler.options.devServer.port || '';

        const ip = internalIp.v4().then( ip => {
          const address = `http://${ip}${port && `:${port}`}`;

          qrCode.generate(address, code => {
            console.log('QR Code generated');
            console.log('Scan code below to visit', address);
            console.log(code);
            didFire = true;
          });
        });
      });
    }
  }
}

module.exports = PrintQRCodePlugin;
