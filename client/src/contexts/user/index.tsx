import React, { useEffect, createContext, Dispatch, useReducer, useContext } from 'react';
import { User, UserJoin } from '../../types/data';

const ACTION_USER_JOIN = 'ACTION_USER_JOIN' as const;
const requestUserJoin = (values: UserJoin) => ({ type: ACTION_USER_JOIN, payload: values });
type Action = ReturnType<typeof requestUserJoin>;
type UserDispatch = Dispatch<Action>;

interface UserState extends User {
  isAuthorized: boolean;
}

interface UserContext {
  state: UserState;
  dispatch: UserDispatch;
}

const initialState = {
  isAuthorized: false,
  nickname: '',
  email: '',
};

function reducer(state: UserState = initialState, action: Action) {
  switch (action.type) {
    case ACTION_USER_JOIN:
      return {
        ...state,
        isAuthorized: true,
      };
    default:
      return state;
  }
}
const AuthStateContext = createContext<UserContext | null>(null);

function AuthModel({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userModel = {
    state,
    dispatch,
  };

  return <AuthStateContext.Provider value={userModel}>{children}</AuthStateContext.Provider>;
}
export const useAuthContext = () => {
  const userModel = useContext(AuthStateContext);
  return userModel;
};
