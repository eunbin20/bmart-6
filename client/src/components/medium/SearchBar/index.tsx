import React, { useState } from 'react';
import * as S from './style';
import { Framework7Icon } from '../..';

interface Props {
  createSearch: Function;
  history?: any;
  presetTitle?: string;
}

function SearchBar({ presetTitle, history, createSearch }: Props): React.ReactElement {
  const [title, setTitle] = useState(presetTitle ?? '');
  function onSearchIconClick() {
    if (title.length === 0) return;

    createSearch({
      title,
      createdAt: new Date().toString(),
    });
    history?.push(`/search/${title}`);
  }

  return (
    <S.SearchBar>
      <S.IconContainer onClick={() => history?.goBack()}>
        <Framework7Icon iconName="arrow_left" fontSize={'20px'} />
      </S.IconContainer>
      <S.Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder={'어떤 상품을 찾으시나요?'}
      ></S.Input>
      <S.IconContainer onClick={() => onSearchIconClick()}>
        <Framework7Icon iconName="search" fontSize={'20px'} />
      </S.IconContainer>
    </S.SearchBar>
  );
}

export default SearchBar;
