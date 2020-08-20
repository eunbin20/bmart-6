import { Action, ACTION_LOGIN_SUCCESS } from './actions';
import { UserState } from '../../types/states';

export default function reducer(state: UserState, action: Action) {
  switch (action.type) {
    case ACTION_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
      };
    default:
      return state;
  }
}
