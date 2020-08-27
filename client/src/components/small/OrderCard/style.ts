import styled from 'styled-components';

export const OrderCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--white);
  width: 100%;
  display: flex;
  border-bottom: 0.267vw var(--border-gray) solid;
  padding: 3.733vw 4vw;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DateContainer = styled.div`
  color: var(--dark-gray);
  font-size: 3.467vw;
  margin-bottom: 1.6vw;
`;
export const TitleContainer = styled.div`
  font-weight: bold;
  font-size: 4.267vw;
  margin-bottom: 1.6vw;
`;
export const PriceContainer = styled.div`
  font-size: 3.467vw;
`;

export const ImageContainer = styled.div`
  width: 17.333vw;
  height: 17.333vw;
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
