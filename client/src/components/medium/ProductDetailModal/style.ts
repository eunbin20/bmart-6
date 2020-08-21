import styled from 'styled-components';

interface ImageProps {
  src: string;
}

export const Image = styled.img.attrs((props: ImageProps) => ({
  alt: 'Product Image',
  src: props.src,
}))`
  width: 100%;
  height: 320px;
  background-color: var(--gray);
`;

export const TopContainer = styled.div`
  padding: 22px 14px;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.05em;
`;

export const TitleDescription = styled.div`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.05em;
  margin-top: 8px;
  color: var(--gray);
`;

export const PriceWrapper = styled.div`
  margin-top: 21px;
  letter-spacing: -0.1em;
  & > span + span {
    margin-left: 5px;
  }
`;

export const PriceRate = styled.span`
  color: var(--red);
  font-size: 14ppx;
  font-weight: bold;
  line-height: 14px;
`;

export const OriginalPrice = styled.s`
  font-size: 13px;
  color: var(--gray);
  line-height: 13px;
  margin-left: 3px;
`;

export const DiscountedPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  margin-left: 3px;
`;
