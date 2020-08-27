export const makeComma = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const delay = (ms: number) => new Promise((resolve) => setTimeout(() => resolve(), ms));
export const setLink = (pathname: string, location: any) => ({
  pathname,
  state: { from: location },
});

const days = ['일', '월', '화', '수', '목', '금', '토'];
export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}/${date.getDate()} (${days[date.getDay()]})`;
};
