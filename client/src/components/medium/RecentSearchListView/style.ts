import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecentSearchListView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
`;
export const RecentSearchCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 13.333vw;
  padding: 0 3.733vw;
  text-decoration: none;
  color: var(--black);
`;
export const SearchTitle = styled.div`
  font-weight: 600;
  font-size: 4.267vw;
`;
export const SearchTrailingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 16vw;
`;
export const SearchDateContainer = styled.div`
  color: var(--gray);
  font-size: 3.467vw;
  margin-right: 2.667vw;
`;
export const DeleteIconContainer = styled.div`
  cursor: pointer;
`;
