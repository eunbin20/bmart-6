import { IData } from '../types/data';

export const DEVELOPMENT_PORT = '4000';

export const SORT_BY = {
  POPULAR: 'mostpopular',
  PRICEUP: 'priceup',
  PRICEDOWN: 'pricedown',
  NEW: 'new',
  DISCOUNTEDRATE: 'discountedRate',
};

export const KEYBOARD = {
  ENTER: 'Enter',
};

export const STORAGE_KEY = {
  ACCESS_TOKEN: 'accessToken',
  CARTS: 'carts',
  RECENT_SEARCH: 'recentSearch',
};

export const COUNTER_KEY = {
  PLUS: 'plus' as 'plus',
  MINUS: 'minus' as 'minus',
};

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
  UNAUTHORIZED_TOKEN_AND_REQUIRE_LOGIN: '토큰 정보가 유효하지 않습니다.\n다시 로그인해주세요.',
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
  '인기 상품순': SORT_BY.POPULAR,
  '높은 가격순': SORT_BY.PRICEUP,
  '낮은 가격순': SORT_BY.PRICEDOWN,
  '신규 상품순': SORT_BY.NEW,
  '할인율 순': SORT_BY.DISCOUNTEDRATE,
};

export const DEFAULT_SORT_OPTION = '인기 상품순';

export const DEFAULT_HEADER_OFFSET_TOP = 1758;
export const BANNER_SCROLL_INTERVAL = 3500;

export const VIEW_TYPE_LISTVIEW = 'listview';
export const VIEW_TYPE_GRID = 'grid';

export const MAIN_BANNERS = [
  {
    id: 2,
    redirectUrl: '/detail/252',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476968-ac543080-e8d8-11ea-8c78-37835ce763a2.jpg',
  },
  {
    id: 3,
    redirectUrl: '/detail/324',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476979-aeb68a80-e8d8-11ea-8c2e-c63f5addabfb.jpg',
  },
  {
    id: 1,
    redirectUrl: '/',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476960-a9f1d680-e8d8-11ea-9615-b922da2f4e15.jpg',
  },
  {
    id: 4,
    redirectUrl: '/detail/318',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476972-ae1df400-e8d8-11ea-9848-5f52824c7b19.jpg',
  },
  {
    id: 5,
    redirectUrl: '/detail/364',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476971-ad855d80-e8d8-11ea-8408-79a12c2b5101.jpg',
  },
];

export const MID_BANNERS = [
  {
    id: 1,
    redirectUrl: '/detail/124',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476982-af4f2100-e8d8-11ea-95e7-28c7a7648d6a.jpg',
  },
  {
    id: 2,
    redirectUrl: '/detail/308',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476983-afe7b780-e8d8-11ea-9a81-ae35afdefa7a.jpg',
  },
];

export const SUB_BANNERS = [
  {
    id: 2,
    redirectUrl: '/',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476986-afe7b780-e8d8-11ea-9113-c5dfe668bf49.jpg',
  },
  {
    id: 1,
    redirectUrl: '/',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476989-b0804e00-e8d8-11ea-84a5-826fa9196c61.jpg',
  },
  {
    id: 3,
    redirectUrl: '/',
    imageUrl:
      'https://user-images.githubusercontent.com/14324748/91476988-b0804e00-e8d8-11ea-9982-eb442906de67.jpg',
  },
];

export const EMOJI_DATA: IData[] = [
  {
    emoji: '🥯',
    text: '동킨 도낫츠',
  },
  {
    emoji: '🥞',
    text: '건포도 팬 케이크',
  },
  {
    emoji: '🍗',
    text: '간장 칰힌',
  },
  {
    emoji: '🍔',
    text: '수제 햄바그',
  },
  {
    emoji: '🌯',
    text: '치킨 부리또',
  },
  {
    emoji: '🍙',
    text: '개등딱지 삼각김밥',
  },
  {
    emoji: '🥘',
    text: '매운 부대찌개',
  },
  {
    emoji: '🥗',
    text: '다이어트 샐러드',
  },
];
