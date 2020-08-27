import { Action, ACTION_LOGIN_SUCCESS, ACTION_INIT_USERINFO } from './actions';
import { UserState } from '../../types/states';
import { OK } from 'http-status';

export default function reducer(state: UserState, action: Action) {
  switch (action.type) {
    case ACTION_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
      };
    case ACTION_INIT_USERINFO:
      const { nickname, email } = action.data;
      return {
        isAuthorized: true,
        nickname,
        email,
        status: OK,
      };
    default:
      return state;
  }
}
