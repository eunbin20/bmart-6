import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.div`
  width: 100%;
  padding: 0 3.733vw;
  margin: 4.267vw 0;
`;

export const SuggestLink = styled(Link)`
  display: block;
  color: var(--black);
  text-decoration: none;
  margin-bottom: 3.2vw;
`;

export const UserMenuContainer = styled.div`
  display: flex;
  height: 13.333vw;
  border: 0.267vw solid var(--gray);
  border-radius: 1.067vw;
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
  width: 0.267vw;
  height: 100%;
  flex-basis: 0.267vw;
  flex-shrink: 0;
  background: var(--gray);
`;

export const UserMenuText = styled.div`
  margin-top: 1.067vw;
`;
