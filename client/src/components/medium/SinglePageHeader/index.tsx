import React from 'react';
import styled from 'styled-components';
import { BackButton } from '../../../components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 4.267vw 3.733vw;
  display: flex;
  align-items: center;
  background: var(--white);
`;

function SinglePageHeader(): React.ReactElement {
  return (
    <HeaderContainer>
      <BackButton />
    </HeaderContainer>
  );
}

export default SinglePageHeader;
