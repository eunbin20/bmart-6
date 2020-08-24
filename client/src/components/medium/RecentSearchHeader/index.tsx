import React from 'react';
import * as S from './style';

interface Props {
  deleteSearch: Function;
}

function RecentSearchHeader({ deleteSearch }: Props): React.ReactElement {
  return (
    <S.RecentSearchHeader>
      <S.TitleContainer>최근 검색어</S.TitleContainer>
      <S.TrailingContainer onClick={() => deleteSearch()}>
        <S.DeleteAllButton>전체삭제</S.DeleteAllButton>
      </S.TrailingContainer>
    </S.RecentSearchHeader>
  );
}

export default RecentSearchHeader;
