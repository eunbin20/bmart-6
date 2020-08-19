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

// interface ColumnCard {
//   LinkWrapper: React.FunctionComponent;
//   ContentContainer: React.FunctionComponent;
//   ImgWrapper: React.FunctionComponent;
//   Image: React.FunctionComponent;
//   LikeIconWrapper: React.FunctionComponent;
//   LikeIcon: React.FunctionComponent;
//   Title: React.FunctionComponent;
//   DiscountedRate: React.FunctionComponent;
// }

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  animation: ${fadeIn} 1s;
  text-decoration: none;
  color: var(--black);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LikeIcon = styled.svg``;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--black);
`;

export const TwoColumnCard = {
  LinkWrapper,
  ContentContainer,
  LikeIcon,
  Image,
  PriceWrapper,
  ImgWrapper: styled.div`
    width: 100%;
    height: 165px;
    margin-bottom: 7px;
  `,
  LikeIconWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    float: right;

    bottom: 36px;
    right: 10px;
    height: 26px;
    width: 26px;

    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  `,
  Title: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.05em;
    margin-bottom: 5px;
  `,
  DiscountedRate: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 10px;
    letter-spacing: -0.1em;
    margin-right: 1px;

    color: var(--red);
  `,
  DiscountedPrice: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: -0.1em;
    text-decoration-line: line-through;
    margin-right: 1px;

    color: var(--gray);
  `,
  Price: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;

    letter-spacing: -0.1em;
  `,
};

export const ThreeColumnCard = {
  LinkWrapper,
  ContentContainer,
  LikeIcon,
  Image,
  PriceWrapper,
  ImgWrapper: styled.div`
    width: 100%;
    height: 106px;
    margin-bottom: 6px;
  `,
  LikeIconWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    position: relative;

    bottom: 33px;
    right: 7px;
    height: 26px;
    width: 26px;

    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  `,
  Title: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.05em;
    margin-bottom: 5px;
  `,
  DiscountedRate: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 10px;
    letter-spacing: -0.1em;

    color: var(--red);
  `,
  DiscountedPrice: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: -0.1em;
    text-decoration-line: line-through;
    margin-right: 1px;

    color: var(--gray);
  `,
  Price: styled.div`
    font-family: Nanum Gothic;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.1em;
  `,
};
