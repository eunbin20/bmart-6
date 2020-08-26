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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const LinkWrapper = styled(Link)`
  width: 165px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  animation: ${fadeIn} 1s;
  text-decoration: none;
  color: var(--black);
`;

const LikeIconWrapper = styled.div`
  position: relative;
  float: right;

  bottom: 36px;
  right: 10px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 165px;
  margin-bottom: 7px;
`;

const Title = styled.div`
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 5px;
`;

const DiscountedRate = styled.div`
  font-weight: bold;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: -0.1em;
  margin-right: 1px;

  color: var(--red);
`;

const DiscountedPrice = styled.div`
  font-size: 8px;
  line-height: 9px;
  letter-spacing: -0.1em;
  text-decoration-line: line-through;
  margin-right: 1px;

  color: var(--gray);
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;

  letter-spacing: -0.1em;
`;

export const TwoColumnCard = {
  ContentContainer,
  Image,
  PriceWrapper,
  LinkWrapper,
  ImgWrapper,
  LikeIconWrapper,
  Title,
  DiscountedRate,
  DiscountedPrice,
  Price,
};

export const TwoHalfColumnCard = {
  ContentContainer,
  Image,
  PriceWrapper,
  LinkWrapper: styled(LinkWrapper)`
    width: 120px;
  `,
  ImgWrapper: styled(ImgWrapper)`
    height: 120px;
    margin-bottom: 7px;
  `,
  LikeIconWrapper: styled(LikeIconWrapper)`
    bottom: 33px;
    right: 7px;
  `,
  Title: styled(Title)`
    font-size: 11px;
    line-height: 13px;
  `,
  DiscountedRate: styled(DiscountedRate)`
    font-size: 10px;
    line-height: 12px;
  `,
  DiscountedPrice: styled(DiscountedPrice)`
    font-size: 9px;
    line-height: 10px;
    margin-right: 1px;
  `,
  Price: styled(Price)`
    font-size: 11px;
    line-height: 13px;
  `,
};

export const ThreeColumnCard = {
  ContentContainer,
  Image,
  PriceWrapper,
  LinkWrapper: styled(LinkWrapper)`
    width: 106px;
  `,
  ImgWrapper: styled(ImgWrapper)`
    height: 106px;
    margin-bottom: 6px;
  `,
  LikeIconWrapper: styled(LikeIconWrapper)`
    bottom: 33px;
    right: 7px;
  `,
  Title: styled(Title)`
    font-size: 10px;
    line-height: 12px;
  `,
  DiscountedRate: styled(DiscountedRate)`
    font-size: 9px;
    line-height: 10px;
  `,
  DiscountedPrice: styled(DiscountedPrice)`
    margin-right: 1px;
  `,
  Price: styled(Price)`
    font-size: 10px;
    line-height: 12px;
  `,
};
