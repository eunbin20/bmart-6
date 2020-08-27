import React, { useMemo } from 'react';
import { FORM_ERROR } from 'final-form';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'querystring';
import { UserJoin } from '../../types/data';
import { useAuthContext } from '../../contexts/user';
import * as userApis from '../../apis/user';
import { JoinSection, UserHeader } from '../../components';
import { ERROR_STATUS, ERROR_MESSAGE } from '../../commons/constants';

type PrevPage = {
  query: string | null;
  id: string | null;
};

function getUrlByPrevPage(prevPage: PrevPage) {
  const { query, id } = prevPage;
  let url = '/';
  if (query) url += query;
  if (id) url += `/${id}`;
  return url;
}

function JoinPage({ history, location }: RouteComponentProps) {
  const userContext = useAuthContext();
  const { search } = location;

  const prevPage = useMemo(() => {
    const query = queryString.parse(search)['?prevPage'] as string;
    const id = queryString.parse(search)['id'] as string;
    return { query, id };
  }, [search]); // CartPage, Categorypage ...

  const getRouteUrl = () => {
    let url = '/user/login';
    const { query, id } = prevPage;
    if (query && query !== 'main') url += `?prevPage=${query}`;
    if (id) url += `&id=${id}`;
    return url;
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
