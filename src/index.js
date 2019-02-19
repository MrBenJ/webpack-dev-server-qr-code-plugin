const qrCode = require('qrcode-terminal');
const internalIp = require('internal-ip');

function showHostWarning() {
  console.warn('devServer.host must be "0.0.0.0" for webpack-dev-server-qr-code to work');
  console.warn('QR Code will not be displayed :(');
}

function showDevServerWarning() {
  console.warn('[WebpackDevServerQRCodePlugin] No devServer config found');
  console.warn('[WebpackDevServerQRCodePlugin] No QR code will be displayed');
}

class PrintQRCodePlugin {
  constructor(options = {}) {
    this.options = options;

    this.apply = this.apply.bind(this);
  }

  apply(compiler, callback) {
    if (compiler.options.devServer) {
      let didFire = false;
      compiler.hooks.done.tap('Print QR Code Plugin', () => {
        if (didFire) {
          callback && callback();
          return;
        }
        const port = compiler.options.devServer.port || '';

        const isHostCorrect =
          compiler.options.devServer.host.trim() === '0.0.0.0';

        if (!isHostCorrect) {
          showHostWarning();
          callback && callback();
          return;
        }

        const ip = internalIp.v4().then( ip => {
          const address = `http://${ip}${port && `:${port}`}`;

          const { size } = this.options;

          qrCode.generate(address, { small: size === 'small'}, code => {
            console.log('QR Code generated');
            console.log('Scan code below to visit', address);
            console.log(code);
            didFire = true;
            callback && callback();
          });
        }).catch( err => {
          return callback && callback(err);
        });
      });
    } else {
      showDevServerWarning();
      callback && callback();
    }
  }
}

module.exports = PrintQRCodePlugin;
