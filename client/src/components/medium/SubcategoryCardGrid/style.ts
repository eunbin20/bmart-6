import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Grid = styled.div`
  display: grid;
  width: 100%;
  background: var(--light-gray);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.267vw;
`;

export const CardContainer = styled(Link)`
  height: 10.667vw;
  display: flex;
  align-items: center;
  text-decoration: none;
  background: var(--white);
`;

export const Card = styled.div`
  font-weight: 500;
  font-size: 3.467vw;
  line-height: 4vw;
  margin-left: 3.733vw;
  color: var(--black);
`;
