import styled from 'styled-components';

export const RecentSearchHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 14px;
`;

export const TitleContainer = styled.div`
  flex: none;
  font-weight: bold;
  font-size: 18px;
  margin-right: 4px;
`;

export const TrailingContainer = styled.div`
  margin-left: auto;
`;

export const DeleteAllButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  background: var(--light-gray);
  border-radius: 15px;
`;
