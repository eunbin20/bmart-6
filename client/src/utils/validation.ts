import { ERROR_MESSAGE } from '../common/constants';
import { UserJoin, UserLogin } from '../types/data';

const regEx = {
  english: /[A-Za-z]/,
  number: /[0-9]/,
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  name: /^[a-zA-Z가-힣]{2,30}$/,
  id: /^[0-9a-zA-Z-_]{3,20}$/,
  password: /[0-9a-zA-Z]{8,20}/,
  phone: /^01([016789]?)([0-9]{3,4})([0-9]{4})$/,
  phoneAuth: /[0-9]{6}$/,
  tel: /^[0-9]{8,11}$/,
};

type Value = string | number | undefined | null | '';

const isEmpty = (value: Value) => value === undefined || value === null || value === '';
const checkEmail = (value: string) => !regEx.email.test(value);
const checkPassword = (value: string) => !regEx.password.test(value);
const checkName = (value: string) => !regEx.name.test(value);

export const createUserValidation = (values: UserJoin) => {
  const errors = {} as UserJoin;
  if (isEmpty(values.email)) {
    errors.email = ERROR_MESSAGE.EMAIL_EMPTY;
  } else if (checkEmail(values.email)) {
    errors.email = ERROR_MESSAGE.EMAIL_TYPE;
  }
  if (isEmpty(values.name)) {
    errors.name = ERROR_MESSAGE.NAME_EMPTY;
  } else if (checkName(values.name)) {
    errors.name = ERROR_MESSAGE.COMMON_TYPE;
  }
  if (isEmpty(values.nickname)) {
    errors.nickname = ERROR_MESSAGE.NICKNAME_EMPTY;
  } else if (checkName(values.nickname)) {
    errors.nickname = ERROR_MESSAGE.COMMON_TYPE;
  }
  if (isEmpty(values.password)) {
    errors.password = ERROR_MESSAGE.PASSWORD_EMPTY;
  } else if (checkPassword(values.password)) {
    errors.password = ERROR_MESSAGE.PASSWORD_TYPE;
  }

  if (isEmpty(values.passwordConfirm)) {
    errors.passwordConfirm = ERROR_MESSAGE.PASSWORD_CONFIRM_EMPTY;
  } else if (checkPassword(values.passwordConfirm) || values.passwordConfirm !== values.password) {
    errors.passwordConfirm = ERROR_MESSAGE.PASSWORD_CONFIRM_EQUAL;
  }

  return errors;
};

export const loginValidation = (values: UserLogin) => {
  const errors = {} as UserJoin;
  if (isEmpty(values.email)) {
    errors.email = ERROR_MESSAGE.EMAIL_EMPTY;
  } else if (checkEmail(values.email)) {
    errors.email = ERROR_MESSAGE.EMAIL_TYPE;
  }

  if (isEmpty(values.password)) {
    errors.password = ERROR_MESSAGE.PASSWORD_EMPTY;
  } else if (checkPassword(values.password)) {
    errors.password = ERROR_MESSAGE.PASSWORD_TYPE;
  }

  return errors;
};
