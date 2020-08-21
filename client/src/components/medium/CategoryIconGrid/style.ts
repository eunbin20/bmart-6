import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  padding: 16px 0;
  row-gap: 10px;
`;

export const CategoryIconWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryIcon = styled.img`
  width: 70px;
`;
