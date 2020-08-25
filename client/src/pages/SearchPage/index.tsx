import React, { useState, useEffect } from 'react';
import * as S from './style';
import { SearchBar, RecentSearchSection, SectionDivider } from '../../components';
import { RECENT_SEARCH } from '../../commons/constants';
import { Search } from '../../types/data';
import { RouteComponentProps } from 'react-router-dom';

export default function SearchPage(props: RouteComponentProps) {
  const [searches, setSearches] = useState<Search[]>([]);

  function deleteAllSearch() {
    localStorage.removeItem(RECENT_SEARCH);
    setSearches([]);
    return;
  }

  function deleteSearch(title?: string) {
    const index = searches.findIndex((search) => search.title === title);
    const updatedSearches = [...searches];
    updatedSearches.splice(index, 1);

    setSearches(updatedSearches);
    localStorage.setItem(RECENT_SEARCH, JSON.stringify(updatedSearches));
  }

  function createSearch(newSearch: Search) {
    const index = searches.findIndex((search) => search.title === newSearch.title);
    const newSearches = [...searches];
    if (index !== -1) newSearches[index] = newSearch;
    else newSearches.push(newSearch);

    setSearches(newSearches);
    localStorage.setItem(RECENT_SEARCH, JSON.stringify(newSearches));
  }

  useEffect(() => {
    const searchHistory = localStorage.getItem(RECENT_SEARCH);
    if (searchHistory) setSearches(JSON.parse(searchHistory));
  }, [localStorage.getItem(RECENT_SEARCH)]);
  return (
    <S.SearchPage>
      <SearchBar history={props.history} createSearch={createSearch} />
      <SectionDivider />
      <RecentSearchSection
        searches={searches}
        deleteAllSearch={deleteAllSearch}
        deleteSearch={deleteSearch}
      />
    </S.SearchPage>
  );
}
