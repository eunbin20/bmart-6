import styled from 'styled-components';

export const InputWrapper = styled.div.attrs({
  className: 'input-wrapper',
})`
  width: 100%;
  min-height: 14.4vw;
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
  font-size: 5.333vw;
  color: var(--gray);
  border-bottom: 0.267vw solid var(--gray);
  padding-bottom: 2.667vw;
`;

interface InputErrorProps {
  visible: boolean;
}

export const InputError = styled.div`
  width: 100%;
  height: 4vw;
  padding-top: 1.333vw;
  color: red;
  display: ${(props: InputErrorProps) => (props.visible ? 'block' : 'none')};
`;
