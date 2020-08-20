import React from 'react';
import { Header } from '../../../types/data';
import * as S from './style';

interface Props extends Header {}

function SectionHeader({
  title,
  description,
  trailing,
  isCategoryProductHeader = false,
}: Props): React.ReactElement {
  return (
    <S.SectionHeader>
      <S.TitleContainer className={isCategoryProductHeader ? 'category' : ''}>
        {title}
      </S.TitleContainer>
      {description && <S.DescriptionContainer>{description}</S.DescriptionContainer>}
      {trailing && <S.TrailingContainer>{trailing}</S.TrailingContainer>}
    </S.SectionHeader>
  );
}

export default SectionHeader;
