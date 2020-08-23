import { CARTS } from '../commons/constants';

type ProductInCart = { productId: number; quantity: number };

export const storage = {
  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  },
  get(key: string) {
    return window.localStorage.getItem(key);
  },
  addCart(id: number, quantity: number) {
    if (this.get(CARTS)) {
      const carts = JSON.parse(this.get(CARTS) as string);
      const targetIndex = carts.findIndex((product: ProductInCart) => product.productId === id);
      if (targetIndex !== -1) {
        const newCarts = [
          ...carts.slice(0, targetIndex),
          { productId: id, quantity },
          ...carts.slice(targetIndex + 1, carts.length),
        ];
        this.set(CARTS, JSON.stringify(newCarts));
        return;
      }
      carts.push({ productId: id, quantity });
      this.set(CARTS, JSON.stringify(carts));
      return;
    }
    this.set(CARTS, JSON.stringify([{ productId: id, quantity }]));
  },
};

export const getDefaultProductCount = (id: number) => {
  const stringCarts = storage.get(CARTS);
  if (!stringCarts) {
    return 1;
  }
  const carts = JSON.parse(stringCarts);
  const target = carts.find(({ productId }: { productId: number }) => productId === id);
  if (target) {
    return target.quantity;
  }
  return 1;
};
