import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Join from '../../components/Join';
import { useAuthContext } from '../../contexts/user';
import { UserJoin } from '../../types/data';
import { createUser } from '../../apis/user';
import UserPageHeader from '../../components/UserPageHeader';

type SubPath = 'join' | 'login';
interface Params {
  subPath: SubPath;
}

function UserPage({ match: { params }, history }: RouteComponentProps<Params>) {
  const userContext = useAuthContext();

  const onSubmitJoin = async (values: UserJoin) => {
    if (userContext === null) {
      return;
    }
    try {
      delete values.passwordConfirm;
      await createUser(values);
      history.push('/user/login');
    } catch (e) {
      console.error(e);
    }
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

  useEffect(() => {
    if (userContext === null) {
      return;
    }
    const { state } = userContext;
  }, [userContext]);

  return (
    <>
      <UserPageHeader subPath={params.subPath} />
      {renderBySubPath(params.subPath)}
    </>
  );
}

export default UserPage;
