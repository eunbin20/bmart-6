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
  width: 20px;
  height: 20px;
`;

export const ItemWrapper = styled.div``;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.label.attrs((props) => ({
  htmlFor: props.id,
}))`
  font-size: 18px;
  font-weight: 700;
  margin-left: 14px;
  margin-top: 4px;
`;

export const ContentBox = styled.div`
  display: flex;
  margin-top: 14px;
`;

interface ContentImage {
  src: string;
}

export const ContentImage = styled.image.attrs((props: ContentImage) => ({
  src: props.src,
  alt: 'content-image',
}))`
  min-width: 106px;
  min-height: 106px;
  background: var(--gray);
`;

export const ContentPriceBox = styled.div`
  margin-left: 14px;
  position: relative;
`;

export const Price = styled.div`
  color: var(--strong-gray);
  font-size: 15px;
`;

export const DiscountedPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StrikePrice = styled.div.attrs({
  className: 'strike',
})`
  color: var(--gray);
  font-size: 15px;
  margin-right: 5px;
`;

export const DiscountedPrice = styled.div`
  font-weight: 700;
  font-size: 17px;
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
  font-size: 15px;
  font-weight: 700;
  min-width: 41px;
  height: 1px;
  background-color: var(--white);
  margin-left: auto;
`;
