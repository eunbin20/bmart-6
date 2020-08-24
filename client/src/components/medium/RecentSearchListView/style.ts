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
  height: 50px;
  padding: 0 14px;
  text-decoration: none;
  color: var(--black);
`;
export const SearchTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const SearchTrailingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
`;
export const SearchDateContainer = styled.div`
  color: var(--gray);
  font-size: 13px;
  margin-right: 10px;
`;
export const DeleteIconContainer = styled.div`
  cursor: pointer;
`;
