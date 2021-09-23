let store;

const memoryStore = {
  values: {},
  getItem: function (key) {
    return this.values[key];
  },
  setItem: function (key, value) {
    this.values[key] = value;
  },
};

if (typeof window !== 'undefined' && 'localStorage' in window) {
  try {
    let key = '__pushtell_react__';
    window.localStorage.setItem(key, key);
    if (window.localStorage.getItem(key) !== key) {
      store = memoryStore;
    } else {
      window.localStorage.removeItem(key);
      store = window.localStorage;
    }
  } catch (e) {
    store = memoryStore;
  }
} else {
  store = memoryStore;
}

export default store;
