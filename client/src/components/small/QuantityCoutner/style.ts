import styled from 'styled-components';

export const CounterContainer = styled.div.attrs({
  className: 'quantity-counter',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 100px;
  height: 40px;
  border: 1px solid var(--gray);
  & > div + div {
    margin-left: 12px;
  }
  & > .f7-icons {
    font-weight: 700;
  }
`;

export const Count = styled.div`
  font-size: 18px;
`;
