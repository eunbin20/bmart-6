import styled from 'styled-components';

export const HotDealSubtitle = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 4.267vw;
  color: var(--red);
`;

export const HotDealSection = styled.div`
  width: 100%;
  margin: 4.267vw 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 4.267vw;
`;

export const HotDealProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.6vw;
  padding: 0 3.733vw;
`;

interface ImageContainerProps {
  active: boolean;
}

export const ImageContainer = styled.div`
  width: 21.867vw;
  height: 21.867vw;
  cursor: pointer;
  border: 0.533vw solid ${(props: ImageContainerProps) => (props.active ? 'var(--red)' : '#DBD9D7')};
`;

export const Image = styled.img`
  width: 20.8vw;
  height: 20.8vw;
  object-fit: cover;
`;

export const SelectedProductCard = styled.div`
  width: 100%;
  padding: 0 3.733vw 0 4vw;
  margin-top: 1.6vw;
`;
