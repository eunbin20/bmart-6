import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Circle = styled(Link)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

export const Count = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  right: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--green);
  font-weight: 700;
  font-size: 11px;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'cart',
}))``;
