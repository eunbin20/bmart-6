export const SORT_BY = {
  POPULAR: 'mostpopular',
  PRICEUP: 'priceup',
  PRICEDOWN: 'pricedown',
  NEW: 'new',
  DISCOUNTEDRATE: 'discountedRate',
};

export const ACCESS_TOKEN = 'accessToken';
export const RECENT_SEARCH = 'recentSearch';

export const ERROR_MESSAGE = {
  COMMON_TYPE: '입력이 올바르지 않습니다.',
  EMAIL_EMPTY: '이메일을 입력해주세요.',
  EMAIL_TYPE: '이메일 형식이 올바르지 않습니다.',
  NAME_EMPTY: '이름을 입력해주세요.',
  NICKNAME_EMPTY: '닉네임을 입력해주세요.',
  PASSWORD_EMPTY: '비밀번호를 입력해주세요.',
  PASSWORD_TYPE: '비밀번호는 8~20자 영문/숫자 입니다.',
  PASSWORD_CONFIRM_EMPTY: '비밀번호 확인을 입력해주세요.',
  PASSWORD_CONFIRM_EQUAL: '비밀번호와 비밀번호 확인이 다릅니다.',
  LOGIN_FAILED: '아이디 또는 비밀번호가 올바르지 않습니다.',
  DUPLICATED_EMAIL: '중복된 이메일 입니다.',
};

export const ERROR_STATUS = {
  SUCCESS: 200,
  CREATE_SUCCESS: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  DUPLICATED: 409,
};

export const SORTOPTIONS: {
  [key: string]: string | undefined;
} = {
  '기본 정렬순': undefined,
  '인기 상품순': SORT_BY.POPULAR,
  '높은 가격순': SORT_BY.PRICEUP,
  '낮은 가격순': SORT_BY.PRICEDOWN,
  '신규 상품순': SORT_BY.NEW,
  '할인율 순': SORT_BY.DISCOUNTEDRATE,
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
