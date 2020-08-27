import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Circle = styled(Link)`
  width: 18.667vw;
  height: 18.667vw;
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
  top: 4vw;
  right: 3.2vw;
  width: 5.333vw;
  height: 5.333vw;
  border-radius: 50%;
  background-color: var(--white);
  color: var(--green);
  font-weight: 700;
  font-size: 2.933vw;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'cart',
}))`
  width: 6.667vw;
`;
