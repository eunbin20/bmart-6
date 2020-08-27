import styled from 'styled-components';

export const CartWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const Text = styled.div.attrs((props) => ({
  onClick: props.onClick,
}))`
  font-size: 3.733vw;
  margin-top: 0.8vw;
  min-width: 16.267vw;
`;

interface CheckBoxProps {
  id: string;
  background: string;
  onClick: (target: number | 'all') => void;
}

export const CheckBox = styled.input.attrs((props) => ({
  id: props.id,
  onClick: props.onClick,
  type: 'checkbox',
}))`
  background-image: ${(props: CheckBoxProps) => `url(${props.background})`};
  width: 5.333vw;
  height: 5.333vw;
`;

export const SelectManageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.267vw 3.733vw;
  border-bottom: 0.8vw solid var(--border-gray);
  width: 100%;
`;

export const ChekBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CheckAllText = styled.label.attrs((props) => ({
  htmlFor: 'cart-checkbox-all',
  onClick: props.onClick,
}))`
  margin-top: 0.8vw;
  margin-left: 3.733vw;
  font-weight: 600;
  font-size: 3.733vw;
`;

export const MainContainer = styled.div`
  padding: 6.4vw 3.733vw;
`;

export const Title = styled.span`
  font-size: 4.8vw;
  font-weight: 600;
  color: var(--green);
  border-bottom: 0.533vw solid var(--green);
  padding-bottom: 0.533vw;
`;

export const ItemContainer = styled.div`
  padding: 6.4vw 0vw;
  & > .cart-item-wrapper + .cart-item-wrapper {
    margin-top: 5.6vw;
  }
`;

interface SubmitButton {
  onClick: () => void;
  canSubmit: boolean;
}

export const SubmitButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  position: fixed;
  bottom: 0;
  border: none;
  outline: none;
  font-size: 4vw;
  padding: 3.733vw;
  z-index: 10;
  width: 100%;
  background: ${(props: SubmitButton) => (props.canSubmit ? 'var(--green)' : 'var(--gray)')};
  color: var(--white);
`;
