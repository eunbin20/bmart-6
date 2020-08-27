import styled from 'styled-components';

export const CounterContainer = styled.div.attrs({
  className: 'quantity-counter',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13.333vw;
  width: 26.667vw;
  height: 10.667vw;
  border: 0.267vw solid var(--gray);
  & > div + div {
    margin-left: 3.2vw;
  }
  & > .f7-icons {
    font-weight: 700;
  }
`;

export const Count = styled.div`
  font-size: 4.8vw;
`;
