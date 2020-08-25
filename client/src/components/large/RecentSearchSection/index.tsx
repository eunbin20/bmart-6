import React from 'react';
import * as S from './style';
import { Searches } from '../../../types/data';
import { RecentSearchHeader, RecentSearchListView } from '../..';

interface Props {
  searches: Searches;
  deleteSearch: Function;
  deleteAllSearch: Function;
}

function RecentSearchSection({
  searches,
  deleteSearch,
  deleteAllSearch,
}: Props): React.ReactElement {
  return (
    <S.RecentSearchSection>
      <RecentSearchHeader deleteAllSearch={deleteAllSearch} />
      <RecentSearchListView {...{ searches, deleteSearch }} />
    </S.RecentSearchSection>
  );
}

export default RecentSearchSection;
