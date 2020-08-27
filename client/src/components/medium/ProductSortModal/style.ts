import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10.667vw;
  padding: 0 4vw;

  border-bottom: 0.267vw solid var(--light-gray);
`;
export const Title = styled.div``;

export const CloseButton = styled.div`
  position: fixed;
  right: 4vw;
  cursor: pointer;
`;

export const SortCardList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const SortCard = styled.div`
  height: 13.333vw;
  padding: 4vw;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3.733vw;
  font-weight: ${(props) => (props.theme.selected ? 'bold' : 'normal')};
`;
