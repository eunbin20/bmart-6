import styled from 'styled-components';

interface CheckBoxProps {
  id: string;
  background: string;
  onClick: (target: number | 'all') => void;
}

export const CheckBox = styled.input.attrs((props) => ({
  id: props.id,
  onClick: props.onClick,
  type: 'checkbox',
}))`
  background-image: ${(props: CheckBoxProps) => `url(${props.background})`};
  width: 5.333vw;
  height: 5.333vw;
`;

export const ItemWrapper = styled.div.attrs({
  className: 'cart-item-wrapper',
})``;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.label.attrs((props) => ({
  htmlFor: props.id,
}))`
  font-size: 4.8vw;
  font-weight: 700;
  margin-left: 3.733vw;
  margin-top: 1.067vw;
`;

export const ContentBox = styled.div`
  display: flex;
  margin-top: 3.733vw;
`;

interface ContentImage {
  src: string;
}

export const ContentImage = styled.img.attrs((props: ContentImage) => ({
  src: props.src,
  alt: 'content-image',
}))`
  max-width: 28.267vw;
  max-height: 28.267vw;
  background: var(--gray);
  object-fit: cover;
`;

export const ContentPriceBox = styled.div`
  margin-left: 3.733vw;
  position: relative;
`;

export const Price = styled.div`
  color: var(--strong-gray);
  font-size: 4vw;
`;

export const DiscountedPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StrikePrice = styled.div.attrs({
  className: 'strike',
})`
  color: var(--gray);
  font-size: 4vw;
  margin-right: 1.333vw;
`;

export const DiscountedPrice = styled.div`
  font-weight: 700;
  font-size: 4.533vw;
  margin-top: 0.533vw;
`;

export const QuantityCounterWrapper = styled.div`
  margin-top: auto;
  position: absolute;
  bottom: 0;
`;

export const ItemDeleteButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  outline: none;
  border: none;
  color: var(--green);
  font-size: 4vw;
  font-weight: 700;
  min-width: 10.933vw;
  height: 0.267vw;
  background-color: var(--white);
  margin-left: auto;
`;
