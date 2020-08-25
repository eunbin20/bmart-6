import React, { useState } from 'react';
import * as S from './style';
import { SearchBar, RecentSearchSection, SectionDivider } from '../../components';
import { storage } from '../../utils/storage';
import { Searches } from '../../types/data';
import { RouteComponentProps } from 'react-router-dom';

export default function SearchPage(props: RouteComponentProps) {
  const [searches, setSearches] = useState<Searches>(storage.getSearches());

  function deleteAllSearch() {
    storage.removeSearches();
    setSearches({});
  }

  function deleteSearch(title: string) {
    const newSearches = { ...searches };
    delete newSearches[title];
    storage.setSearches(newSearches);
    setSearches(newSearches);
  }

  function createSearch(title: string) {
    const newSearches = { ...searches, [title]: new Date().toString() };
    storage.setSearches(newSearches);
    setSearches(newSearches);
  }

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
