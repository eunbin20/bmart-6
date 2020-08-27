import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.div`
  width: 100%;
  padding: 0 14px;
  margin: 16px 0;
`;

export const SuggestLink = styled(Link)`
  display: block;
  color: var(--black);
  text-decoration: none;
  margin-bottom: 12px;
`;

export const UserMenuContainer = styled.div`
  display: flex;
  height: 50px;
  border: 1px solid var(--gray);
  border-radius: 4px;
`;

export const MenuLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: var(--black);
`;

export const UserMenuBar = styled.div`
  display: block;
  width: 1px;
  height: 100%;
  flex-basis: 1px;
  flex-shrink: 0;
  background: var(--gray);
`;

export const UserMenuText = styled.div`
  margin-top: 4px;
`;
