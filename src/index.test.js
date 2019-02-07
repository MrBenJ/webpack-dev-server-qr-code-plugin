const PrintQRCodePlugin = require('./index');

const hooks = {
  done: {
    tap(tag, cb) { cb(); }
  }
};

describe('PrintQRCodePlugin tests', () => {
  it('Works with happy path', done => {
    const i = new PrintQRCodePlugin();

    const options = {
      devServer: {
        host: '0.0.0.0',
        port: 5000
      }
    };

    const spy = spyOn(console, 'warn');
    i.apply({ options, hooks }, done);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Shows a host warning', done => {
    const i = new PrintQRCodePlugin();

    const options = {
      devServer: {
        host: 'hurf.durf.i.dont.understand.computers',
        port: 5000
      }
    };
    const spy = spyOn(console, 'warn');
    i.apply({ options, hooks }, done);

    expect(spy).toHaveBeenCalled();
  });

  it('Warns user of missing devServer option', done => {
    const i = new PrintQRCodePlugin();

    const options = {};

    const spy = spyOn(console, 'warn');
    i.apply({ options, hooks }, done);

    expect(spy).toHaveBeenCalled();
  });
});
