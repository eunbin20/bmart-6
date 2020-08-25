import React from 'react';
import * as S from './style';
import { Searches } from '../../../types/data';
import Framework7Icon from '../../small/Framework7Icon';

interface Props {
  searches: Searches;
  deleteSearch: Function;
}

function RecentSearchListView({ searches, deleteSearch }: Props): React.ReactElement {
  return (
    <S.RecentSearchListView>
      {Object.entries(searches)
        .sort((a, b) => (a[1] < b[1] ? 1 : -1))
        .map((search, index) => {
          const [title, createdAt] = search;
          const dateObj = new Date(createdAt);
          const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
          const date = dateObj.getDate().toString().padStart(2, '0');
          return (
            <S.RecentSearchCard to={`/search/${title}`} key={index}>
              <S.SearchTitle>{title}</S.SearchTitle>
              <S.SearchTrailingContainer>
                <S.SearchDateContainer>{`${month}.${date}`}</S.SearchDateContainer>
                <S.DeleteIconContainer
                  onClick={(e) => {
                    e.preventDefault();
                    deleteSearch(title);
                  }}
                >
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
