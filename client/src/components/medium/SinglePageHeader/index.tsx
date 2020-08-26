import React from 'react';
import styled from 'styled-components';
import { BackButton } from '../../../components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 16px 14px;
  display: flex;
  align-items: center;
`;

function SinglePageHeader(): React.ReactElement {
  return (
    <HeaderContainer>
      <BackButton />
    </HeaderContainer>
  );
}

export default SinglePageHeader;
