import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 16px;
`;
export const CloseButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  position: absolute;
  top: 12px;
  right: 14px;
  margin-left: auto;
  font-size: 15px;
  border: none;
  outline: none;
  color: var(--gray);
  background-color: var(--white);
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;

  & > .quantity-counter {
    margin-left: auto;
  }
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'product-image',
}))`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;

export const DescriptionContainer = styled.div`
  margin-left: 14px;
  & > div + div {
    margin-top: 11px;
  }
`;

export const DesciptionTitle = styled.div`
  font-size: 16px;
`;

export const DesciptionQuantity = styled.div`
  font-size: 15px;
  color: var(--gray);
`;

export const DescriptionPrice = styled.div`
  font-size: 13px;
`;

export const CardAddButton = styled.button.attrs((props) => ({
  onClick: props.onClick,
}))`
  border: none;
  outline: none;
  width: 100%;
  min-height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  font-size: 16px;
  color: var(--white);
  font-weight: 600;
`;
