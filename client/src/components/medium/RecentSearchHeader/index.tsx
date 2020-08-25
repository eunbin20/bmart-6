import React from 'react';
import * as S from './style';

interface Props {
  deleteAllSearch: Function;
}

function RecentSearchHeader({ deleteAllSearch }: Props): React.ReactElement {
  return (
    <S.RecentSearchHeader>
      <S.TitleContainer>최근 검색어</S.TitleContainer>
      <S.TrailingContainer onClick={() => deleteAllSearch()}>
        <S.DeleteAllButton>전체삭제</S.DeleteAllButton>
      </S.TrailingContainer>
    </S.RecentSearchHeader>
  );
}

export default RecentSearchHeader;
