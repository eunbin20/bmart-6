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
  color: #000;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 165px;
  object-fit: cover;
  margin-bottom: 6px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 5px;
`;

export const PriceWrapper = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
`;
