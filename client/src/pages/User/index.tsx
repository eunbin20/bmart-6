import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import JoinTemplate from '../../templates/Join';
import LoginTemplate from '../../templates/Login';
import Join from '../../components/Join';
import { UserJoin } from '../../types/Data';

type SubPath = 'join' | 'login';
interface Params {
  subPath: SubPath;
}

function User({ match: { params }, history }: RouteComponentProps<Params>) {
  const onSubmitJoin = (values: UserJoin) => {
    console.log(values);
  };

  const renderBySubPath = (subPath: SubPath) => {
    if (subPath !== 'login' && subPath !== 'join') {
      return history.push('/');
    }
    if (subPath === 'join') {
      return <JoinTemplate Join={<Join onSubmit={onSubmitJoin} />} />;
    }
    return <LoginTemplate />;
  };

  return <>{renderBySubPath(params.subPath)}</>;
}

export default User;
