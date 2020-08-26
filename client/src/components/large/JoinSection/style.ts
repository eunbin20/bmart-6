import styled from 'styled-components';

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
  margin-top: 20px;
  border: none;
  width: 100%;
  height: 45px;
  border-radius: 7px;
  color: #ffffffff;
  font-size: 18px;
  font-weight: 700;
`;
