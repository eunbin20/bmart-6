import React from 'react';
import styled from 'styled-components';

interface Props {
  iconName: string;
  fontSize?: string;
  color?: string;
  onClick?: () => void;
}

const Icon = styled.div.attrs((props) => ({
  onClick: props.onClick,
}))`
  font-size: ${(props) => props?.style?.fontSize ?? '4.800vw'};
  color: ${(props) => props?.style?.color ?? 'var(--black)'};
`;

function Framework7Icon({ iconName, color, fontSize, onClick }: Props): React.ReactElement {
  const basicOnClick = () => {};
  return (
    <Icon style={{ fontSize, color }} className={'f7-icons'} onClick={onClick ?? basicOnClick}>
      {iconName}
    </Icon>
  );
}

export default Framework7Icon;
