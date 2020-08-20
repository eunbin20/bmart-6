import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  padding: 28px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > .onboard-navi + .onboard-navi {
    margin-left: 20px;
  }
`;

export const Navigation = styled(NavLink).attrs({
  className: 'onboard-navi',
})`
  font-size: 15px;
  text-decoration: none;
  padding-bottom: 5px;
`;
