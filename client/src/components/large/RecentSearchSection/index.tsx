import React from 'react';
import * as S from './style';
import { Search } from '../../../types/data';
import { RecentSearchHeader, RecentSearchListView } from '../..';

interface Props {
  searches: Search[];
  deleteSearch: Function;
}

function RecentSearchSection({ searches, deleteSearch }: Props): React.ReactElement {
  return (
    <S.RecentSearchSection>
      <RecentSearchHeader deleteSearch={deleteSearch} />
      <RecentSearchListView {...{ searches, deleteSearch }} />
    </S.RecentSearchSection>
  );
}

export default RecentSearchSection;
