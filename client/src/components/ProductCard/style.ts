import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0.0;
  }
  100% {
    opacity: 1.0;
  }
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  animation: ${fadeIn} 1s;
  text-decoration: none;
  color: var(--black);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 165px;
  margin-bottom: 6px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LikeIcon = styled.svg``;

export const LikeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 33px;
  left: 132px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  height: 26px;
  width: 26px;
`;

export const Title = styled.div`
  font-family: Nanum Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.05em;

  margin-bottom: 5px;
`;

export const DiscountedRate = styled.div`
  font-family: Nanum Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: -0.1em;
  margin-right: 1px;

  color: var(--red);
`;
export const DiscountedPrice = styled.div`
  font-family: Nanum Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  letter-spacing: -0.1em;
  text-decoration-line: line-through;
  margin-right: 1px;

  color: var(--gray);
`;
export const Price = styled.div`
  font-family: Nanum Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;

  letter-spacing: -0.1em;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--black);
`;
