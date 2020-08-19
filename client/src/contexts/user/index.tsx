import React, { useEffect, createContext, Dispatch, useReducer, useContext, useState } from 'react';
import { User, UserJoin } from '../../types/data';
import * as apis from '../../apis/user';
import useApiRequest, { REQUEST, SUCCESS, FAILURE } from '../../hooks/useApiRequests';

const ACTION_USER_JOIN = 'ACTION_USER_JOIN' as const;
const requestUserJoin = (values: UserJoin) => ({ type: ACTION_USER_JOIN, data: values });
type Action = ReturnType<typeof requestUserJoin>;
type UserDispatch = Dispatch<Action>;

interface UserState extends User {
  isAuthorized: boolean;
}

interface UserContextType {
  state: UserState;
  setAction: UserDispatch;
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
const UserContext = createContext<UserContextType | null>(null);

export function userProvider({ children }: { children: React.ReactNode }) {
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
