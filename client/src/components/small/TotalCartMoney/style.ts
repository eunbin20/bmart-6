import styled from 'styled-components';

export const Wrapper = styled.div`
  /* bottom: 0; */
  width: 100%;
  margin-bottom: 12vw;
`;

export const PriceTotalBox = styled.div`
  padding: 9.333vw 3.733vw 6.4vw 3.733vw;
  border-top: 0.267vw solid var(--border-gray);
  & > .cart-money-content + .cart-money-content {
    margin-top: 5.333vw;
  }
`;

export const Content = styled.div.attrs({
  className: 'cart-money-content',
})`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-size: 4.8vw;
  font-weight: 700;
`;

export const MinimizePrice = styled.div`
  margin-top: 2.667vw;
  text-align: right;
  font-size: 4.533vw;
  color: var(--red);
`;

export const EventText = styled.div<{ hasMargin?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  font-weight: 500;
  margin-top: ${(props) => (props.hasMargin ? '6.400vw' : '1.333vw')};
`;

export const DiscriptionBox = styled.div`
  padding: 3.733vw;
  background: var(--light-gray);
  & > .money-total-des + .money-total-des {
    margin-top: 2.667vw;
  }
`;

export const DiscriptionText = styled.div.attrs({
  className: 'money-total-des',
})`
  font-size: 3.2vw;
  line-height: 4vw;
`;
