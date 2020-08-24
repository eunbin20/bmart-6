export const makeComma = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const addLeadingZeros = (number: number, length: number) => {
  let s = number.toString();
  while (s.length < length) s = '0' + s;
  return s;
};
