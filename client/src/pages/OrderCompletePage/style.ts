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
  height: calc(100vh - 52px);
`;

export const FriendsImage = styled.img.attrs((props) => ({
  src: props.src,
}))``;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: var(--green);
  margin-top: 26px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

export const MenuButtonList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const MenuButton = styled(Link)`
  display: flex;
  width: 146px;
  height: 36px;
  border: 1px solid var(--gray);
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  flex-shrink: 0;
  color: var(--black);
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;

export const MenuButtonText = styled.div`
  margin-left: 6px;
`;
