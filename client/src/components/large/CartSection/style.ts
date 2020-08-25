import styled from 'styled-components';

export const SelectManageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface CheckBoxAllProps {
  background: string;
}

export const CheckBoxAll = styled.input.attrs({
  id: 'cart-checkobx-all',
  type: 'checkbox',
})`
  background-image: ${(props: CheckBoxAllProps) => `url(${props.background})`};
  width: 20px;
  height: 20px;
`;

export const CheckAllText = styled.label.attrs((props) => ({
  for: 'cart-checkbox-all',
  onClick: props.onClick,
}))`
  margin-left: 30px;
`;
