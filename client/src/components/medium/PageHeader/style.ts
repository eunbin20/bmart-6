import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 4vw;
`;

export const PageHeader = styled.div`
  display: flex;
  width: 100%;
  height: 13.867vw;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 5.333vw;
  height: 5.333vw;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10.133vw;
  padding: 0 3.733vw;
  margin-bottom: 3.467vw;
  border: 0.267vw solid var(--gray);
  border-radius: 2.667vw;
  font-size: 3.2vw;
  line-height: 3.733vw;
  color: var(--dark-gray);
  text-decoration: none;

  & > .f7-icons {
    margin-right: 3.2vw;
  }
`;

export const LogoContainer = styled.div`
  padding-top: 1.067vw;
`;
