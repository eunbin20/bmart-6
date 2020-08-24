import React, { useState, useEffect } from 'react';
import * as S from './style';
import { SearchBar, RecentSearchSection, SectionDivider } from '../../components';
import { RECENT_SEARCH } from '../../commons/constants';
import { Search } from '../../types/data';
import { RouteComponentProps } from 'react-router-dom';

export default function SearchPage(props: RouteComponentProps) {
  const [searches, setSearches] = useState<Search[]>([]);

  return (
    <S.SearchPage>
      <SearchBar history={props.history} createSearch={createSearch} />
      <SectionDivider />
      <RecentSearchSection searches={searches} deleteSearch={deleteSearch} />
    </S.SearchPage>
  );
}
