import React, { useMemo } from 'react';
import { FORM_ERROR } from 'final-form';
import { RouteComponentProps } from 'react-router-dom';
import { UserJoin, CustomLocationState } from '../../types/data';
import { useAuthContext } from '../../contexts/user';
import * as userApis from '../../apis/user';
import { JoinSection, UserHeader } from '../../components';
import { ERROR_STATUS, ERROR_MESSAGE } from '../../commons/constants';

function JoinPage({ history, location }: RouteComponentProps<{}, any, CustomLocationState | any>) {
  const userContext = useAuthContext();
  const prevPath = location.state?.customFrom || '/';
  // (로그인 필요한 페이지 -> 로그인 -> 회원가입 링크 클릭)
  // 이때, customFrom에 첫번째 페이지의 path가 담겨서 오기 때문에, 가입 후 그 페이지로 이동

  const onSubmitJoin = async (values: UserJoin) => {
    if (userContext === null) {
      return;
    }
    delete values.passwordConfirm;
    try {
      await userApis.createUser(values);
      history.push(prevPath, { from: location });
    } catch (e) {
      if (e.response.status === ERROR_STATUS.DUPLICATED) {
        return { [FORM_ERROR]: ERROR_MESSAGE.DUPLICATED_EMAIL };
      }
    }
  };

  return (
    <>
      <UserHeader />
      <JoinSection onSubmit={onSubmitJoin} />
    </>
  );
}

export default JoinPage;
