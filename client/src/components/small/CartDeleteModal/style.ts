import styled from 'styled-components';

export const GrayBg = styled.div.attrs((props) => ({
  onClick: props.onClick,
}))`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(100, 100, 100, 0.3);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  width: 80vw;
  border-radius: 1.333vw;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  color: var(--gray);
  height: 26.667vw;
`;

interface ButtonProps {
  onClick: () => void;
  hasBorder?: boolean;
}

export const Button = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  outline: none;
  border: none;
  background: var(--white);
  width: 50%;
  height: 13.333vw;
  border-top: 0.267vw solid var(--gray);
  border-right: ${(props: ButtonProps) => (props.hasBorder ? '0.267vw' : '0vw')} solid var(--gray);
`;
