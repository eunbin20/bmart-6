import React, { useState, useEffect } from 'react';
import * as S from './style';
import { SearchBar, RecentSearchSection, SectionDivider } from '../../components';
import { RECENT_SEARCH } from '../../commons/constants';
import { Search } from '../../types/data';
import { RouteComponentProps } from 'react-router-dom';

export default function SearchPage(props: RouteComponentProps) {
  const [searches, setSearches] = useState<Search[]>([]);

  function deleteSearch(title?: string) {
    // deleteAll
    if (!title) {
      localStorage.removeItem(RECENT_SEARCH);
      setSearches([]);
      return;
    }

    const index = searches.findIndex((search) => search.title === title);
    const updatedSearches = [...searches];
    updatedSearches.splice(index, 1);

    setSearches(updatedSearches);
    localStorage.setItem(RECENT_SEARCH, JSON.stringify(updatedSearches));
  }

  useEffect(() => {
    const searchHistory = localStorage.getItem(RECENT_SEARCH);
    if (searchHistory) setSearches(JSON.parse(searchHistory));
  }, [localStorage.getItem(RECENT_SEARCH)]);
  return (
    <S.SearchPage>
      <SearchBar history={props.history} createSearch={createSearch} />
      <SectionDivider />
      <RecentSearchSection searches={searches} deleteSearch={deleteSearch} />
    </S.SearchPage>
  );
}
