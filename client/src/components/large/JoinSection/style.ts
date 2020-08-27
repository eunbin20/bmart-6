import styled from 'styled-components';

export const InputContainer = styled.section`
  width: 100%;
  padding: 12vw 7.467vw;
  > .input-wrapper + .input-wrapper {
    margin-top: 8.533vw;
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
  margin-top: 5.333vw;
  border: none;
  width: 100%;
  height: 12vw;
  border-radius: 1.867vw;
  color: #ffffffff;
  font-size: 4.8vw;
  font-weight: 700;
`;
