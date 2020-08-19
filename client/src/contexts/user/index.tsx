import React, { useEffect, createContext, Dispatch, useReducer, useContext, useState } from 'react';
import { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } from 'http-status';
import { UserJoin } from '../../types/data';
import { UserState } from '../../types/states';
import * as apis from '../../apis/user';
import useApiRequest, { REQUEST, SUCCESS, FAILURE } from '../../hooks/useApiRequests';

const ACTION_USER_JOIN = 'USER_JOIN' as const;
const ACTION_ERROR = 'ERROR' as const;
export const requestUserJoin = (values: UserJoin) => ({ type: ACTION_USER_JOIN, data: values });
type Action = ReturnType<typeof requestUserJoin>;
type UserDispatch = Dispatch<Action>;

interface UserContextType {
  state: UserState;
  setAction: UserDispatch;
}

const initialState = {
  isAuthorized: false,
  nickname: '',
  email: '',
  status: 0, //
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
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [action, setAction] = useState<Action | null>(null);
  const [apiResponse, createUserDispatch] = useApiRequest<UserJoin>(apis.createUser);

  const userModel = {
    state,
    setAction,
  };

  useEffect(() => {
    if (!action) {
      return;
    }
    switch (action.type) {
      case ACTION_USER_JOIN:
        createUserDispatch({
          type: REQUEST,
          body: action.data,
        });
        return;
      default:
        throw new Error('Unhandled Case');
    }
  }, [action, createUserDispatch]);

  return <UserContext.Provider value={userModel}>{children}</UserContext.Provider>;
}

export const useAuthContext = () => {
  const userModel = useContext(UserContext);
  return userModel;
};
