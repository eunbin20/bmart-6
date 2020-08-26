import React from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { Framework7Icon } from '../../../components';

export default function UserHeader() {
  const history = useHistory();

  const pushBack = () => history.goBack();

  return (
    <S.Wrapper>
      <Framework7Icon iconName="arrow_left" onClick={pushBack} />
    </S.Wrapper>
  );
}
