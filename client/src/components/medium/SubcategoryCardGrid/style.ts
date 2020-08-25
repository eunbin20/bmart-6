import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Grid = styled.div`
  display: grid;
  width: 100%;
  background: var(--light-gray);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1px;
`;

export const CardContainer = styled(Link)`
  height: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  background: var(--white);
`;

export const Card = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  margin-left: 14px;
  color: var(--black);
`;
