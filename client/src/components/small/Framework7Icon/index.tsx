import React from 'react';
import styled from 'styled-components';

interface Props {
  iconName: string;
  fontSize?: string;
  color?: string;
}

const Icon = styled.div`
  font-size: ${(props) => props?.style?.fontSize ?? '18px'};
  color: ${(props) => props?.style?.color ?? 'var(--black)'};
`;

function Framework7Icon({ iconName, color, fontSize }: Props): React.ReactElement {
  return (
    <Icon style={{ fontSize, color }} className={'f7-icons'}>
      {iconName}
    </Icon>
  );
}

export default Framework7Icon;
