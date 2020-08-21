import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: var(--light-gray);
  border-top: 1px solid var(--border-gray);
`;

function SectionDivider(): React.ReactElement {
  return <Divider></Divider>;
}

export default SectionDivider;
