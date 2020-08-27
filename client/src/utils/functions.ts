export const makeComma = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const delay = (ms: number) => new Promise((resolve) => setTimeout(() => resolve(), ms));
export const setLink = (pathname: string, location: any) => ({
  pathname,
  state: { from: location },
});
