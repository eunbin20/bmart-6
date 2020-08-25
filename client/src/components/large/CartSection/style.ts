import styled from 'styled-components';

export const Text = styled.div`
  font-size: 14px;
  margin-top: 3px;
`;

export const SelectManageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 14px;
  border-bottom: 3px solid var(--border-gray);
`;

interface CheckBoxAllProps {
  background: string;
}

export const ChekBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

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
  margin-top: 3px;
  margin-left: 8px;
  font-weight: 600;
  font-size: 14px;
`;
