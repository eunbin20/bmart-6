import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
}

export const Logo = styled.img`
  width: ${(props) => props.style?.width ?? '16vw'};
`;
function BmartLogo({ width }: Props): React.ReactElement {
  return <Logo src="/assets/bmart-logo.png" style={{ width }}></Logo>;
}

export default BmartLogo;
