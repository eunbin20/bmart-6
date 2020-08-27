import React, { useState } from 'react';
import * as S from './style';
import { Framework7Icon } from '../..';

interface Props {
  isSearchPage?: boolean;
  presetTitle?: string;
  history: any;
  createSearch: Function;
}

function SearchBar({
  isSearchPage = true,
  presetTitle,
  history,
  createSearch,
}: Props): React.ReactElement {
  const [title, setTitle] = useState(presetTitle ?? '');
  const isFromSearchPage = history[history.length - 2]?.location === '/search';

  function onSearchIconClick() {
    if (title.length === 0 || !isSearchPage) return;
    createSearch(title);
    history.push(`/search/${title}`);
  }

  return (
    <S.SearchBar
      onClick={() => {
        if (isSearchPage) return;
        isFromSearchPage ? history.goBack() : history.push('/search');
      }}
    >
      <S.IconContainer onClick={() => isSearchPage && history.goBack()}>
        <Framework7Icon iconName="arrow_left" fontSize={'20px'} />
      </S.IconContainer>
      <S.Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder={'어떤 상품을 찾으시나요?'}
        autoFocus={isSearchPage}
      ></S.Input>
      <S.IconContainer onClick={() => onSearchIconClick()}>
        <Framework7Icon iconName="search" fontSize={'20px'} />
      </S.IconContainer>
    </S.SearchBar>
  );
}

export default SearchBar;
