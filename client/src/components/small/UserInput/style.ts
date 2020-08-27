import styled from 'styled-components';

export const InputWrapper = styled.div.attrs({
  className: 'input-wrapper',
})`
  width: 100%;
  min-height: 54px;
`;

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export const Input = styled.input.attrs((props: InputProps) => ({
  name: props.name,
  type: props.type,
  placeholder: props.placeholder,
}))`
  width: 100%;
  outline: none;
  border: none;
  font-size: 20px;
  color: var(--gray);
  border-bottom: 1px solid var(--gray);
  padding-bottom: 10px;
`;

interface InputErrorProps {
  visible: boolean;
}

export const InputError = styled.div`
  width: 100%;
  height: 15px;
  padding-top: 5px;
  color: red;
  display: ${(props: InputErrorProps) => (props.visible ? 'block' : 'none')};
`;
