import React from 'react';
import * as S from './style';
import { Logo } from '../../../commons/svgs';

function PageHeader(): React.ReactElement {
  return (
    <S.PageHeaderContainer>
      <S.PageHeader>{Logo()}</S.PageHeader>
    </S.PageHeaderContainer>
  );
}

export default PageHeader;
