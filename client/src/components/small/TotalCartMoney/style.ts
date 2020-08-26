import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 35px 14px 24px 14px;
  border-top: 1px solid var(--border-gray);
  & > .cart-money-content + .cart-money-content {
    margin-top: 20px;
  }
`;

export const Content = styled.div.attrs({
  className: 'cart-money-content',
})`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const MinimizePrice = styled.div`
  margin-top: 10px;
  text-align: right;
  font-size: 17px;
  color: var(--red);
`;

export const EventText = styled.div<{ hasMargin?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  margin-top: ${(props) => (props.hasMargin ? '24px' : '5px')};
`;
