import styled from 'styled-components';

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10.667vw;
  width: 100%;
  padding: 0 4vw;
  background: var(--white);
  border-radius: 4vw 4vw 0vw 0vw;
  border-bottom: 0.267vw solid var(--light-gray);
`;
export const Title = styled.div``;

export const CloseButton = styled.div`
  position: fixed;
  right: 4vw;
  cursor: pointer;
`;

export const SortCardList = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;

  @media only screen and (min-width: 768px) {
    max-height: 20vw;
  }
`;

export const SortCard = styled.div`
  width: 100%;
  height: 13.333vw;
  padding: 4vw;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 3.733vw;
  font-weight: ${(props) => (props.theme.selected ? 'bold' : 'normal')};
`;
