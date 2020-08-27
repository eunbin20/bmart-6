import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Framework7Icon } from '../../../components';

export const IconContainer = styled.div`
  cursor: pointer;
`;

function BackButton(): React.ReactElement {
  const history = useHistory();

  return (
    <IconContainer onClick={() => history.goBack()}>
      <Framework7Icon iconName="arrow_left" fontSize={'5.333vw'} />
    </IconContainer>
  );
}

export default BackButton;
