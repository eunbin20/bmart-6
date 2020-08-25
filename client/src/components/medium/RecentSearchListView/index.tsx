import React from 'react';
import * as S from './style';
import { Search } from '../../../types/data';
import Framework7Icon from '../../small/Framework7Icon';

interface Props {
  searches: Search[];
  deleteSearch: Function;
}

function RecentSearchListView({ searches, deleteSearch }: Props): React.ReactElement {
  return (
    <S.RecentSearchListView>
      {searches
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        .map((search, index) => {
          const createdAt = new Date(search.createdAt);
          const month = (createdAt.getMonth() + 1).toString().padStart(2, '0');
          const date = createdAt.getDate().toString().padStart(2, '0');
          return (
            <S.RecentSearchCard to={`/search/${search.title}`} key={index}>
              <S.SearchTitle>{search.title}</S.SearchTitle>
              <S.SearchTrailingContainer>
                <S.SearchDateContainer>{`${month}.${date}`}</S.SearchDateContainer>
                <S.DeleteIconContainer onClick={() => deleteSearch(search.title)}>
                  <Framework7Icon iconName={'multiply'} fontSize={'22px'} color={'var(--gray)'} />
                </S.DeleteIconContainer>
              </S.SearchTrailingContainer>
            </S.RecentSearchCard>
          );
        })}
    </S.RecentSearchListView>
  );
}

export default RecentSearchListView;
