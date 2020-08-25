import React, { useEffect, createContext, Dispatch, useReducer, useContext, useState } from 'react';
import { UserState } from '../../types/states';
import { Action, ACTION_LOGIN_SUCCESS } from './actions';
import reducer from './reducer';
import { storage } from '../../utils/storage';
import { STORAGE_KEY } from '../../commons/constants';

export type UserDispatch = Dispatch<Action>;
interface UserContextType {
  state: UserState;
  setAction: UserDispatch;
}

const checkIsAuthorized = () => {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return storage.get(STORAGE_KEY.ACCESS_TOKEN) ? true : false;
};

const initialState = {
  isAuthorized: checkIsAuthorized(),
  nickname: '',
  email: '',
  status: 0, //
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [action, setAction] = useState<Action | null>(null);
  // const [apiResponse, createUserDispatch] = useApiRequest<UserJoin>(apis.createUser);

  const userModel = {
    state,
    setAction,
  };

  useEffect(() => {
    if (!action) {
      return;
    }
    switch (action.type) {
      case ACTION_LOGIN_SUCCESS:
        dispatch({ type: ACTION_LOGIN_SUCCESS });
        break;
      default:
        throw new Error('Unhandled Case');
    }
  }, [action, dispatch]);

  return <UserContext.Provider value={userModel}>{children}</UserContext.Provider>;
}

export const useAuthContext = () => {
  const userModel = useContext(UserContext);
  return userModel;
};
