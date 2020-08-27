import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InputContainer = styled.section`
  width: 100%;
  padding: 12vw 7.467vw;
  > .input-wrapper + .input-wrapper {
    margin-top: 8.533vw;
  }
`;

export const LogoContainer = styled.div``;

export const NeedLogin = styled.div`
  color: var(--gray);
  width: 100%;
  padding-bottom: 4vw;
`;

interface PushButtonProps {
  onSubmit: (args: any) => void;
}

export const PushButton = styled.button.attrs((props: PushButtonProps) => ({
  type: 'submit',
  onSubmit: props.onSubmit,
}))`
  background: var(--green);
  margin-top: 2.667vw;
  border: none;
  width: 100%;
  height: 12vw;
  border-radius: 1.867vw;
  color: #ffffffff;
  font-size: 4.8vw;
  font-weight: 700;
`;

export const Text = styled.div`
  padding-top: 5.333vw;
  text-align: right;
  font-size: 3.733vw;
  color: var(--gray);
`;

export const JoinButton = styled(Link)`
  color: var(--gray);
  /* text-decoration: none; */
  font-size: 3.733vw;
`;
