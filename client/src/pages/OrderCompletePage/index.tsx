import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SectionDivider, PageHeader, Framework7Icon } from '../../components';
import { setLink } from '../../utils/functions';
import * as S from './style';

export default function OrderCompletePage({
  history,
  location,
}: RouteComponentProps): React.ReactElement {
  return (
    <S.PageContainer>
      <PageHeader isHome={false} />
      <SectionDivider />
      <S.ContentContainer>
        <S.FriendsImage src="/assets/woowa-friends.png" />
        <S.Title>고객님의 주문이 접수되었습니다.</S.Title>
        <S.Description>조금만 기다려주세요! 금방 갈게요 ❤️</S.Description>
        <S.MenuButtonList>
          <S.MenuButton to={setLink('/', location)}>
            <Framework7Icon iconName="house" fontSize={'3.733vw'} />
            <S.MenuButtonText>메인화면으로 이동</S.MenuButtonText>
          </S.MenuButton>
          <S.MenuButton to={setLink('/user/order', location)}>
            <Framework7Icon iconName="list_dash" fontSize={'3.733vw'} />
            <S.MenuButtonText>주문내역 확인하기</S.MenuButtonText>
          </S.MenuButton>
        </S.MenuButtonList>
      </S.ContentContainer>
    </S.PageContainer>
  );
}
