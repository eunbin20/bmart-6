import { User } from '../../types/data';

export const ACTION_LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const ACTION_INIT_USERINFO = 'INIT_USERINFO' as const;
// const ACTION_ERROR = 'ERROR' as const;

export const setLoginSuccess = () => ({ type: ACTION_LOGIN_SUCCESS });
export const initUserInfo = (data: User) => ({ type: ACTION_INIT_USERINFO, data });

export type Action = ReturnType<typeof setLoginSuccess> | ReturnType<typeof initUserInfo>;
