import styled from 'styled-components';

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
`;

interface ImageProps {
  src: string;
}

export const Image = styled.img.attrs((props: ImageProps) => ({
  alt: 'Product Image',
  src: props.src,
}))`
  width: 100%;
  height: 85.333vw;
  background-color: var(--gray);
  object-fit: cover;
`;

export const SectionContainer = styled.div`
  padding: 5.867vw 3.733vw;
  & > dl + dl {
    margin-top: 4vw;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.div`
  font-weight: bold;
  font-size: 4.267vw;
  line-height: 4.267vw;
  letter-spacing: -0.05em;
`;

export const TitleDescription = styled.div`
  font-size: 3.2vw;
  line-height: 3.2vw;
  letter-spacing: -0.05em;
  margin-top: 2.133vw;
  color: var(--gray);
`;

export const PriceWrapper = styled.div`
  margin-top: 5.6vw;
  letter-spacing: -0.1em;
  & > span + span {
    margin-left: 1.333vw;
  }
`;

export const PriceRate = styled.span`
  color: var(--red);
  font-size: 3.733vw;
  font-weight: bold;
  line-height: 3.733vw;
`;

export const OriginalPrice = styled.s`
  font-size: 3.467vw;
  line-height: 3.467vw;
  margin-left: 0.8vw;
  color: var(--gray);
`;

export const DiscountedPrice = styled.span`
  font-weight: bold;
  font-size: 4.267vw;
  line-height: 4.267vw;
  margin-left: 0.8vw;
`;

export const DescriptionWrapper = styled.dl`
  display: flex;
`;

export const DescriptionTerm = styled.dt`
  color: var(--strong-gray);
  font-size: 4vw;
  min-width: 26.667vw;
  & > dd {
    margin-right: 8vw;
  }
`;

export const DescriptionData = styled.dd`
  color: var(--black);
  font-size: 4vw;
`;

export const CartButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: var(--light-gray);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 3.733vw;
  color: var(--green);
  font-size: 4vw;
  font-weight: bold;
`;

export const CartButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  border: none;
  outline: none;
  color: var(--white);
  font-size: 4.8vw;
  font-weight: bold;
  background: var(--green);
  cursor: pointer;
  width: 100%;
  height: 12.267vw;
  margin-top: 3.733vw;
`;
