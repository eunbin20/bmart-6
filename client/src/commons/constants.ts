export const POPULAR = 'mostpopular';
export const PRICEUP = 'priceup';
export const PRICEDOWN = 'pricedown';
export const NEW = 'new';
export const DISCOUNTEDRATE = 'discountedRate';

export const SORTOPTIONS: {
  [key: string]: string | undefined;
} = {
  '기본 정렬순': undefined,
  '인기 상품순': POPULAR,
  '높은 가격순': PRICEUP,
  '낮은 가격순': PRICEDOWN,
  '신규 상품순': NEW,
  '할인율 순': DISCOUNTEDRATE,
};

export const BANNER_SCROLL_INTERVAL = 3500;
export const BANNER_SCROLL_PREVENT_TOUCH_INTERVAL = 600;

export const BANNERS = [
  {
    id: 1,
    redirectUrl: '/',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576935-7b9a3a00-e1fa-11ea-892c-58cbeed119a3.png',
  },
  {
    id: 2,
    redirectUrl: '/banner',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576940-7d63fd80-e1fa-11ea-9224-0561d69749da.png',
  },
  {
    id: 3,
    redirectUrl: '/banner',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576940-7d63fd80-e1fa-11ea-9224-0561d69749da.png',
  },
  {
    id: 4,
    redirectUrl: '/banner',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/90576935-7b9a3a00-e1fa-11ea-892c-58cbeed119a3.png',
  },
];
