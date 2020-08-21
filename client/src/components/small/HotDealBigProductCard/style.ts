import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: 7px;
`;

export const DiscountedRateBadge = styled.div`
  position: absolute;
  left: 10px;
  top: 13px;
  padding: 10px 0;
  width: 52px;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: -0.1em;
  color: #fff;
  background: var(--red);
  border-radius: 2px;
  z-index: 1;

  span {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 346px;
  height: 220px;
  object-fit: cover;
  border: 1px solid #dbd9d7;
`;

export const Title = styled.div`
  font-size: 13px;
  margin-top: 11px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--black);
  margin-top: 9px;
`;

export const DiscountedRate = styled.div`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: -0.1em;
  margin-right: 1px;

  color: var(--red);
`;

export const DiscountedPrice = styled.div`
  font-size: 14px;
  letter-spacing: -0.1em;
  text-decoration-line: line-through;
  margin-right: 1px;

  color: var(--gray);
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 16px;

  letter-spacing: -0.1em;
`;
