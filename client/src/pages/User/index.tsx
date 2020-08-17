import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import JoinTemplate from '../../templates/Join';
import LoginTemplate from '../../templates/Login';
import Join from '../../components/Join';

type SubPath = 'join' | 'login';
interface Params {
  subPath: SubPath;
}

function User(props: RouteComponentProps<Params>) {
  const {
    match: { params },
    history,
  } = props;

  const renderBySubPath = (subPath: SubPath) => {
    if (subPath !== 'login' && subPath !== 'join') {
      return history.push('/');
    }
    if (subPath === 'join') {
      return <JoinTemplate Join={<Join />} />;
    }
    return <LoginTemplate />;
  };

  return <>{renderBySubPath(params.subPath)}</>;
}

export default User;
