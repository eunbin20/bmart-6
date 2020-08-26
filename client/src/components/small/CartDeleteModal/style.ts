import styled from 'styled-components';

export const GrayBg = styled.div`
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
  width: 300px;
  border-radius: 5px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: var(--gray);
  height: 100px;
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
  height: 50px;
  border-top: 1px solid var(--gray);
  border-right: ${(props: ButtonProps) => (props.hasBorder ? '1px' : '0px')} solid var(--gray);
`;
