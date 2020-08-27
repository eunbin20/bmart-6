import styled from 'styled-components';

export const CartWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const Text = styled.div.attrs((props) => ({
  onClick: props.onClick,
}))`
  font-size: 14px;
  margin-top: 3px;
  min-width: 61px;
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
  width: 20px;
  height: 20px;
`;

export const SelectManageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 14px;
  border-bottom: 3px solid var(--border-gray);
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
  margin-top: 3px;
  margin-left: 14px;
  font-weight: 600;
  font-size: 14px;
`;

export const MainContainer = styled.div`
  padding: 24px 14px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--green);
  border-bottom: 2px solid var(--green);
  padding-bottom: 2px;
`;

export const ItemContainer = styled.div`
  padding: 24px 0px;
  & > .cart-item-wrapper + .cart-item-wrapper {
    margin-top: 21px;
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
  font-size: 15px;
  padding: 14px;
  z-index: 10;
  width: 100%;
  background: ${(props: SubmitButton) => (props.canSubmit ? 'var(--green)' : 'var(--gray)')};
  color: var(--white);
`;
