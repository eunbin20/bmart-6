import styled from 'styled-components';
import * as C from '../../styles/common'; // C is Common
import { Link } from 'react-router-dom';

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

interface NavigationProps {
  isActive: boolean;
}

export const NavigationBox = styled.div.attrs({
  className: 'onboard-navi',
})`
  border-bottom: 2px solid ${(props: NavigationProps) => (props.isActive ? C.GRAY_2 : '#ffffff')};
`;

export const Navigation = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  padding-bottom: 5px;
`;
