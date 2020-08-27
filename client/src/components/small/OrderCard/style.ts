import styled from 'styled-components';

export const OrderCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--white);
  width: 100%;
  display: flex;
  border-bottom: 1px var(--border-gray) solid;
  padding: 14px 15px;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DateContainer = styled.div`
  color: var(--dark-gray);
  font-size: 13px;
  margin-bottom: 6px;
`;
export const TitleContainer = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 6px;
`;
export const PriceContainer = styled.div`
  font-size: 13px;
`;

export const ImageContainer = styled.div`
  width: 65px;
  height: 65px;
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
