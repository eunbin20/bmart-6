import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InputContainer = styled.section`
  width: 100%;
  padding: 45px 28px;
  > .input-wrapper + .input-wrapper {
    margin-top: 32px;
  }
`;

export const LogoContainer = styled.div``;

interface PushButtonProps {
  onSubmit: (args: any) => void;
}

export const PushButton = styled.button.attrs((props: PushButtonProps) => ({
  type: 'submit',
  onSubmit: props.onSubmit,
}))`
  background: var(--green);
  margin-top: 10px;
  border: none;
  width: 100%;
  height: 45px;
  border-radius: 7px;
  color: #ffffffff;
  font-size: 18px;
  font-weight: 700;
`;

export const Text = styled.div`
  padding-top: 20px;
  text-align: right;
  font-size: 14px;
  color: var(--gray);
`;

export const JoinButton = styled(Link)`
  color: var(--gray);
  /* text-decoration: none; */
  font-size: 14px;
`;
