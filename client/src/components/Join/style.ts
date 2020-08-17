import styled from 'styled-components';
import * as C from '../../styles/common'; // C is Common

export const Header = styled.header`
  width: 100%;
  padding: 100px 28px;
  font-size: 40px;
  font-weight: bold;
  color: ${C.WOOWA_COLOR};
  text-align: left;
`;

export const InputContainer = styled.section`
  width: 100%;
  padding: 0 28px;
  > .input-wrapper + .input-wrapper {
    margin-top: 32px;
  }
`;

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
  color: ${C.GRAY_2};
  border-bottom: 1px solid ${C.GRAY_2};
  padding-bottom: 14px;
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

export const PushButton = styled.button.attrs({
  className: 'f7-icons',
})`
  background: ${C.GRAY_1};
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 7px;
  color: #ffffffff;
  position: absolute;
  bottom: 50px;
  right: 28px;
  z-index: 5;
`;

export const Footer = styled.footer`
  background-color: ${C.WOOWA_COLOR};
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
