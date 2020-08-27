import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 5.333vw;
  padding: 0 3.733vw;
`;

export const TitleContainer = styled.div`
  flex: none;
  font-weight: bold;
  font-size: 4.267vw;
  margin-right: 1.067vw;
  &.category {
    font-size: 3.733vw;
    line-height: 4.267vw;
  }
`;

export const DescriptionContainer = styled.div`
  flex: none;
  font-weight: bold;
  font-size: 3.467vw;
  vertical-align: bottom;
  color: var(--green);
`;

export const TrailingContainer = styled.div`
  margin-left: auto;
`;
