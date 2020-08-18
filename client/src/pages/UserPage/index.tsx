import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Join from '../../components/Join';
import { UserJoin } from '../../types/data';

type SubPath = 'join' | 'login';
interface Params {
  subPath: SubPath;
}

function UserPage({ match: { params }, history }: RouteComponentProps<Params>) {
  const onSubmitJoin = (values: UserJoin) => {
    console.log(values);
  };

  const renderBySubPath = (subPath: SubPath) => {
    if (subPath !== 'login' && subPath !== 'join') {
      return history.push('/');
    }
    if (subPath === 'join') {
      return <Join onSubmit={onSubmitJoin} />;
    }
    return <></>;
  };

  return <>{renderBySubPath(params.subPath)}</>;
}

export default UserPage;
