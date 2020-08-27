import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
}

const Divider = styled.div`
  width: ${(props) => props?.style?.width ?? '100%'};
  height: 0.8vw;
  background: var(--light-gray);
  border-top: 0.267vw solid var(--border-gray);
`;

function SectionDivider({ width }: Props): React.ReactElement {
  return <Divider style={{ width }}></Divider>;
}

export default SectionDivider;
