import styled from 'styled-components';

export const RecentSearchHeader = styled.div`
  display: flex;
  align-items: center;
  height: 13.333vw;
  padding: 0 3.733vw;
`;

export const TitleContainer = styled.div`
  flex: none;
  font-weight: bold;
  font-size: 4.8vw;
  margin-right: 1.067vw;
`;

export const TrailingContainer = styled.div`
  margin-left: auto;
`;

export const DeleteAllButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.867vw 2.667vw;
  background: var(--light-gray);
  border-radius: 4vw;
  cursor: pointer;
`;
