import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 58.667vw;
  margin-bottom: 1.867vw;
`;

export const DiscountedRateBadge = styled.div`
  position: absolute;
  left: 2.667vw;
  top: 3.467vw;
  padding: 2.667vw 0;
  width: 13.867vw;
  text-align: center;
  font-size: 3.733vw;
  font-weight: 800;
  letter-spacing: -0.1em;
  color: #fff;
  background: var(--red);
  border-radius: 0.533vw;
  z-index: 1;

  span {
    font-size: 4.267vw;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 92.267vw;
  height: 58.667vw;
  object-fit: cover;
  border: 0.267vw solid #dbd9d7;
`;

export const Title = styled.div`
  font-size: 3.467vw;
  margin-top: 2.933vw;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--black);
  margin-top: 2.4vw;
`;

export const DiscountedRate = styled.div`
  font-weight: bold;
  font-size: 4vw;
  letter-spacing: -0.1em;
  margin-right: 0.267vw;

  color: var(--red);
`;

export const DiscountedPrice = styled.div`
  font-size: 3.733vw;
  letter-spacing: -0.1em;
  text-decoration-line: line-through;
  margin-right: 0.267vw;

  color: var(--gray);
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 4.267vw;

  letter-spacing: -0.1em;
`;
