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

export const padStart = (data: any, targetLength: number, padString: string) => {
  return String(data).padStart(targetLength, padString);
};

export const getTomorrowDatetime = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const year = padStart(tomorrow.getFullYear(), 2, '0');
  const month = padStart(tomorrow.getMonth() + 1, 2, '0');
  const date = padStart(tomorrow.getDate(), 2, '0');
  return `${year}-${month}-${date} 00:00:00`;
};
