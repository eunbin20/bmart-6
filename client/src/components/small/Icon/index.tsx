import React from 'react';
import styled from 'styled-components';

interface Props {
  iconName: string;
  fontSize?: string;
}

const Framework7Icon = styled.div`
  font-size: ${(props) => props?.style?.fontSize ?? '18px'};
`;

function Icon({ iconName, fontSize }: Props): React.ReactElement {
  return (
    <Framework7Icon style={{ fontSize }} className={'f7-icons'}>
      {iconName}
    </Framework7Icon>
  );
}

export default Icon;
