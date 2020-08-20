import styled from 'styled-components';

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  padding: 0 14px;
`;

export const TitleContainer = styled.div`
  flex: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  margin-right: 4px;
  &.category {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const DescriptionContainer = styled.div`
  flex: none;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: var(--green);
`;

export const TrailingContainer = styled.div`
  margin-left: auto;
`;
