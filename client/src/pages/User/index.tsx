import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import JoinTemplate from '../../templates/Join';
import LoginTemplate from '../../templates/Login';

type SubPath = 'join' | 'login';
interface Params {
  subPath: SubPath;
}

function User(props: RouteComponentProps<Params>) {
  const {
    match: { params },
    history,
  } = props;

  const renderBySubpath = (subPath: SubPath) => {
    if (subPath !== 'login' && subPath !== 'join') {
      return history.push('/');
    }
    if (subPath === 'join') {
      return <JoinTemplate />;
    }
    return <LoginTemplate />;
  };

  return <>{renderBySubpath(params.subPath)}</>;
}

export default User;
