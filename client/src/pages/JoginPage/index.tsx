import React, { useMemo } from 'react';
import { FORM_ERROR } from 'final-form';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'querystring';
import { UserJoin } from '../../types/data';
import { useAuthContext } from '../../contexts/user';
import * as userApis from '../../apis/user';
import { JoinSection, UserHeader } from '../../components';
import { ERROR_STATUS, ERROR_MESSAGE } from '../../commons/constants';

function getUrlByPrevPage(prevPage: string | null) {
  switch (prevPage) {
    case 'cart':
      return '/cart';
    default:
      return '/';
  }
}

function JoinPage({ history, location }: RouteComponentProps) {
  const userContext = useAuthContext();
  const { search } = location;

  const prevPage = useMemo(() => {
    const query = queryString.parse(search)['?prevPage'] as string;
    if (query) return query;
    return null;
  }, [search]); // 현재는 CartPage만

  const getRouteUrl = () => {
    let returnValue = '/user/login';
    if (prevPage !== null) {
      returnValue += `?prevPage=${prevPage}`;
    }
    return returnValue;
  };

  const onSubmitJoin = async (values: UserJoin) => {
    if (userContext === null) {
      return;
    }
    delete values.passwordConfirm;
    try {
      await userApis.createUser(values);
      history.push(getRouteUrl());
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
