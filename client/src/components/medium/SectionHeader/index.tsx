import React from 'react';
import { Header } from '../../../types/data';
import * as S from './style';

interface Props extends Header {}

function SectionHeader({ title, description, trailing }: Props): React.ReactElement {
  return (
    <S.SectionHeader>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.DescriptionContainer>description</S.DescriptionContainer>
      <S.TrailingContainer>trailing</S.TrailingContainer>
    </S.SectionHeader>
  );
}

export default SectionHeader;
