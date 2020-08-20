export const POPULAR = 'mostpopular';
export const PRICEUP = 'priceup';
export const PRICEDOWN = 'pricedown';
export const NEW = 'new';
export const DISCOUNTEDRATE = 'discountedRate';

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
  '인기 상품순': POPULAR,
  '높은 가격순': PRICEUP,
  '낮은 가격순': PRICEDOWN,
  '신규 상품순': NEW,
  '할인율 순': DISCOUNTEDRATE,
};

export const BANNER_SCROLL_INTERVAL = 3500;
export const BANNER_SCROLL_PREVENT_TOUCH_INTERVAL = 600;
