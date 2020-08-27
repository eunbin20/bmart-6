import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 13.867vw);
`;

export const FriendsImage = styled.img.attrs((props) => ({
  src: props.src,
}))``;

export const Title = styled.div`
  font-size: 4.8vw;
  font-weight: bold;
  color: var(--green);
  margin-top: 6.933vw;
`;

export const Description = styled.div`
  font-size: 3.733vw;
  margin-top: 2.667vw;
`;

export const MenuButtonList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8.533vw;
`;

export const MenuButton = styled(Link)`
  display: flex;
  width: 38.933vw;
  height: 9.6vw;
  border: 0.267vw solid var(--gray);
  border-radius: 1.067vw;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  flex-shrink: 0;
  color: var(--black);
  margin-top: 2.133vw;

  &:first-child {
    margin-top: 0;
  }
`;

export const MenuButtonText = styled.div`
  margin-left: 1.6vw;
`;
