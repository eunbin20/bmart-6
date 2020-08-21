import styled from 'styled-components';

export const HotDealSubtitle = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  color: var(--red);
`;

export const HotDealSection = styled.div`
  width: 100%;
  margin: 16px 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const HotDealProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 6px;
  padding: 0 14px;
`;

interface ImageContainerProps {
  active: boolean;
}

export const ImageContainer = styled.div`
  width: 82px;
  height: 82px;
  cursor: pointer;
  border: 2px solid ${(props: ImageContainerProps) => (props.active ? 'var(--red)' : '#DBD9D7')};
`;

export const Image = styled.img`
  width: 78px;
  height: 78px;
  object-fit: cover;
`;

export const SelectedProductCard = styled.div`
  width: 100%;
  padding: 0 14px 0 15px;
  margin-top: 6px;
`;
