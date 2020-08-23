import { CARTS } from '../commons/constants';

export const storage = {
  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  },
  get(key: string) {
    return window.localStorage.getItem(key);
  },
  addCart(id: number) {
    if (this.get(CARTS)) {
      const carts = JSON.parse(this.get(CARTS) as string);
      carts.push(String(id));
      this.set(CARTS, JSON.stringify(carts));
      return;
    }
    this.set(CARTS, JSON.stringify([String(id)]));
  },
};
