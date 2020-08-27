import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 15px;

  border-bottom: 1px solid var(--light-gray);
`;
export const Title = styled.div``;

export const CloseButton = styled.div`
  position: fixed;
  right: 15px;
  cursor: pointer;
`;

export const SortCardList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const SortCard = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${(props) => (props.theme.selected ? 'bold' : 'normal')};
`;
