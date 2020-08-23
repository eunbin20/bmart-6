import { CARTS } from '../commons/constants';

type ProductInCart = { productId: number; quantity: number };

export const storage = {
  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
  },
  get(key: string) {
    return window.localStorage.getItem(key);
  },
  getCartTotal() {
    const carts = this.get(CARTS);
    if (!carts) {
      return 0;
    }
    return JSON.parse(carts).length;
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
      } // 이미 장바구니에 있는거 Update
      carts.push({ productId: id, quantity });
      this.set(CARTS, JSON.stringify(carts)); // 장바구니는 담은 물품이지만 새로움 아이템 추가
      return;
    }
    this.set(CARTS, JSON.stringify([{ productId: id, quantity }])); // 장바구니 비어서 장바구니 만들고 추가
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
