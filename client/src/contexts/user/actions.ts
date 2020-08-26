export const ACTION_LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
// const ACTION_ERROR = 'ERROR' as const;

export const setLoginSuccess = () => ({ type: ACTION_LOGIN_SUCCESS });

export type Action = ReturnType<typeof setLoginSuccess>;
