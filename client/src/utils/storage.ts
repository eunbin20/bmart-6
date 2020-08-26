import { STORAGE_KEY } from '../commons/constants';
import { Searches, Product, ProductInCart } from '../types/data';

const { CARTS, RECENT_SEARCH } = STORAGE_KEY;

export const storage = {
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  },
  get(key: string) {
    return localStorage.getItem(key);
  },
  remove(key: string) {
    return localStorage.removeItem(key);
  },
  getCarts() {
    const carts = this.get(CARTS);
    if (carts) {
      return JSON.parse(carts);
    }
    return [];
  },
  getProductTotalCount() {
    const carts = this.get(CARTS);
    if (!carts) {
      return 0;
    }
    return JSON.parse(carts).length;
  },
  addCart(product: Product, count: number) {
    const { id } = product;
    if (this.get(CARTS)) {
      const carts = JSON.parse(this.get(CARTS) as string);
      const targetIndex = carts.findIndex((product: ProductInCart) => product.id === id);
      if (targetIndex !== -1) {
        const newCarts = [
          ...carts.slice(0, targetIndex),
          { ...carts[targetIndex], count: carts[targetIndex].count + count },
          ...carts.slice(targetIndex + 1, carts.length),
        ];
        this.set(CARTS, JSON.stringify(newCarts));
        return;
      } // 이미 장바구니에 있는거 Update
      carts.push({ ...product, count });
      this.set(CARTS, JSON.stringify(carts)); // 장바구니는 담은 물품이지만 새로움 아이템 추가
      return;
    }
    this.set(CARTS, JSON.stringify([{ ...product, count }])); // 장바구니 비어서 장바구니 만들고 추가
  },
  updateCartById(id: number, count: number) {
    const carts = this.getCarts();
    const targetIndex = carts.findIndex((cart: ProductInCart) => cart.id === id);
    const newCarts = [
      ...carts.slice(0, targetIndex),
      { ...carts[targetIndex], count },
      ...carts.slice(targetIndex + 1, carts.length),
    ];
    this.set(CARTS, JSON.stringify(newCarts));
  },
  deleteCartItem(nextCarts: ProductInCart[]) {
    this.set(CARTS, JSON.stringify(nextCarts));
  },
  getSearches() {
    return this.get(RECENT_SEARCH) ? JSON.parse(this.get(RECENT_SEARCH) as string) : [];
  },
  removeSearches() {
    this.remove(RECENT_SEARCH);
  },
  setSearches(searches: Searches) {
    this.set(RECENT_SEARCH, JSON.stringify(searches));
  },
};

export const getDefaultProductCount = (id: number) => {
  const stringCarts = storage.get(CARTS);
  if (!stringCarts) {
    return 1;
  }
  const carts = JSON.parse(stringCarts);
  const target = carts.find((product: ProductInCart) => product.id === id);
  if (target) {
    return target.quantity;
  }
  return 1;
};
