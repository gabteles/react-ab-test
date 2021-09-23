describe('Store', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('works with browser storage', () => {
    const store = require('../../src/store').default;
    store.setItem('foo', 'bar');
    expect(store.getItem('foo')).toEqual('bar');
  });

  it('works without browser storage', () => {
    delete window.localStorage;
    const store = require('../../src/store').default;
    store.setItem('foo', 'bar');
    expect(store.getItem('foo')).toEqual('bar');
  });
});
