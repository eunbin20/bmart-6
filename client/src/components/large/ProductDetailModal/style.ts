import styled from 'styled-components';

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

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

export const SectionContainer = styled.div`
  padding: 22px 14px;

  & > dl + dl {
    margin-top: 15px;
  }
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
  line-height: 13px;
  margin-left: 3px;
`;

export const DiscountedPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  margin-left: 3px;
`;

export const DescriptionWrapper = styled.dl`
  display: flex;
`;

export const DescriptionTerm = styled.dt`
  color: var(--strong-gray);
  font-size: 15px;
  min-width: 100px;
  & > dd {
    margin-right: 30px;
  }
`;

export const DescriptionData = styled.dd`
  color: var(--black);
  font-size: 15px;
`;

export const CartButtonContainer = styled.div`
  margin-top: auto;
  background: var(--light-gray);
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 14px;
  color: var(--green);
  font-size: 15px;
  font-weight: bold;
`;

export const CartButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  border: none;
  outline: none;
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
  background: var(--green);
  width: 100%;
  height: 46px;
  margin-top: 14px;
`;
