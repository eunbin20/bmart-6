import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 52px);
`;

export const EmptyImage = styled.img.attrs((props) => ({
  src: props.src,
}))``;

export const EmptyText = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;
