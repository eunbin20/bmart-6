import styled, { css } from 'styled-components';

const commonStyle = css`
  width: 100%;
`;

export const ChildrenWrapper = styled.div`
  ${commonStyle}
  padding: 0;
  min-height: 70vh;
`;

export const HeaderWrapper = styled.div`
  ${commonStyle}
`;

export const FooterWrapper = styled.div`
  ${commonStyle}
`;

export const InternalServerError = styled.img`
  min-height: inherit;
  height: 100%;
  width: 100%;
  margin: 0;
  object-fit: contain;
`;
