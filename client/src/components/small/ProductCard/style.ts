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
  width: 44vw;
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

  bottom: 9.6vw;
  right: 2.667vw;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 44vw;
  margin-bottom: 1.867vw;
`;

const Title = styled.div`
  font-size: 2.667vw;
  line-height: 3.2vw;
  margin-bottom: 1.333vw;
`;

const DiscountedRate = styled.div`
  font-weight: bold;
  font-size: 2.4vw;
  line-height: 2.667vw;
  letter-spacing: -0.1em;
  margin-right: 0.267vw;

  color: var(--red);
`;

const DiscountedPrice = styled.div`
  font-size: 2.133vw;
  line-height: 2.4vw;
  letter-spacing: -0.1em;
  text-decoration-line: line-through;
  margin-right: 0.267vw;

  color: var(--gray);
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 2.667vw;
  line-height: 3.2vw;

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
    width: 32vw;
  `,
  ImgWrapper: styled(ImgWrapper)`
    height: 32vw;
    margin-bottom: 1.867vw;
  `,
  LikeIconWrapper: styled(LikeIconWrapper)`
    bottom: 8.8vw;
    right: 1.867vw;
  `,
  Title: styled(Title)`
    font-size: 2.933vw;
    line-height: 3.467vw;
  `,
  DiscountedRate: styled(DiscountedRate)`
    font-size: 2.667vw;
    line-height: 3.2vw;
  `,
  DiscountedPrice: styled(DiscountedPrice)`
    font-size: 2.4vw;
    line-height: 2.667vw;
    margin-right: 0.267vw;
  `,
  Price: styled(Price)`
    font-size: 2.933vw;
    line-height: 3.467vw;
  `,
};

export const ThreeColumnCard = {
  ContentContainer,
  Image,
  PriceWrapper,
  LinkWrapper: styled(LinkWrapper)`
    width: 28.267vw;
  `,
  ImgWrapper: styled(ImgWrapper)`
    height: 28.267vw;
    margin-bottom: 1.6vw;
  `,
  LikeIconWrapper: styled(LikeIconWrapper)`
    bottom: 8.8vw;
    right: 1.867vw;
  `,
  Title: styled(Title)`
    font-size: 2.667vw;
    line-height: 3.2vw;
  `,
  DiscountedRate: styled(DiscountedRate)`
    font-size: 2.4vw;
    line-height: 2.667vw;
  `,
  DiscountedPrice: styled(DiscountedPrice)`
    margin-right: 0.267vw;
  `,
  Price: styled(Price)`
    font-size: 2.667vw;
    line-height: 3.2vw;
  `,
};
