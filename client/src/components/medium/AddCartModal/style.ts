import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.733vw;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 4.267vw;
`;
export const CloseButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  position: absolute;
  top: 3.2vw;
  right: 3.733vw;
  margin-left: auto;
  font-size: 4vw;
  border: none;
  outline: none;
  color: var(--gray);
  background-color: var(--white);
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3.733vw;

  & > .quantity-counter {
    margin-left: auto;
  }
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'product-image',
}))`
  width: 18.667vw;
  height: 18.667vw;
  border-radius: 1.333vw;
  object-fit: cover;
`;

export const DescriptionContainer = styled.div`
  margin-left: 3.733vw;
  & > div + div {
    margin-top: 2.933vw;
  }
`;

export const DesciptionTitle = styled.div`
  font-size: 4.267vw;
`;

export const DesciptionQuantity = styled.div`
  font-size: 4vw;
  color: var(--gray);
`;

export const DescriptionPrice = styled.div`
  font-size: 3.467vw;
`;

export const CardAddButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  border: none;
  outline: none;
  width: 100%;
  min-height: 13.333vw;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  font-size: 4.267vw;
  color: var(--white);
  font-weight: 600;
  display: flex;
`;

export const TotalPrice = styled.span`
  position: absolute;
  top: 4.8vw;
  right: 6.667vw;
  font-size: 3.733vw;
`;
