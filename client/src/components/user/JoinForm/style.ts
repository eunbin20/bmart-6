import styled from 'styled-components';
import * as C from '../../../styles/common'; // C is Common

export const InputContainer = styled.section`
  width: 100%;
  padding: 0 28px;
  > .input-wrapper + .input-wrapper {
    margin-top: 32px;
  }
`;

interface PushButtonProps {
  onSubmit: (args: any) => void;
}

export const PushButton = styled.button.attrs((props: PushButtonProps) => ({
  type: 'submit',
  className: 'f7-icons',
  onSubmit: props.onSubmit,
}))`
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
