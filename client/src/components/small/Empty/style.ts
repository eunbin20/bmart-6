import styled from 'styled-components';

interface EmptyContainerProps {
  subtractHeight: string | undefined;
}

export const EmptyContainer = styled.div<EmptyContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${(props: EmptyContainerProps) =>
    props.subtractHeight ? `calc(100vh - 52px - ${props.subtractHeight}px)` : 'calc(100vh - 52px)'};
`;

export const EmptyImage = styled.img.attrs((props) => ({
  src: props.src,
}))``;

export const EmptyText = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;
