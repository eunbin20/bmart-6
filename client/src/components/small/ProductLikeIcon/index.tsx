import React from 'react';
import styled from 'styled-components';

interface Props {
  productId: number;
  isLiked: boolean;
  containerSize?: string;
  iconSize?: string;
  onClick: Function;
}

const LikeIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props?.style?.height ?? '6.933vw'};
  width: ${(props) => props?.style?.height ?? '6.933vw'};

  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
`;

function ProductLikeIcon({
  productId,
  isLiked,
  containerSize = '6.933vw',
  iconSize = '5.333vw',
  onClick,
}: Props): React.ReactElement {
  return (
    <LikeIconContainer style={{ height: `${containerSize}` }}>
      <svg
        onClick={(e) => {
          e.preventDefault();
          onClick(productId, !isLiked);
        }}
        width={iconSize}
        height={iconSize}
        viewBox={`0 0 20 20`}
        fill={isLiked ? 'var(--red)' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.65166 11.0072L3.65302 11.0086L9.65078 17.127C9.74484 17.223 9.87357 17.277 10.0079 17.277C10.1423 17.277 10.271 17.2229 10.365 17.1269L16.3628 11.0037L16.3643 11.0021C17.2508 10.0893 17.7467 8.86701 17.7467 7.59459C17.7467 6.32223 17.2508 5.09997 16.3644 4.1872C15.9283 3.73775 15.4064 3.38043 14.8296 3.13643C14.2529 2.89242 13.633 2.76669 13.0067 2.76669C12.3805 2.76669 11.7606 2.89242 11.1838 3.13643C10.7577 3.31669 10.3616 3.55878 10.0078 3.85418C9.6541 3.55878 9.25795 3.31669 8.83187 3.13643L8.63706 3.59692L8.83187 3.13643C8.2551 2.89242 7.63521 2.76669 7.00895 2.76669C6.38269 2.76669 5.76281 2.89242 5.18604 3.13643C4.60936 3.3804 4.08752 3.73764 3.65145 4.18698C2.76347 5.1 2.26666 6.32338 2.26666 7.597C2.26666 8.87072 2.76355 10.0942 3.65166 11.0072Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9148 7.11854C14.9148 6.73348 14.7618 6.3642 14.4896 6.09192C14.2173 5.81965 13.848 5.66669 13.463 5.66669"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </LikeIconContainer>
  );
}

export default ProductLikeIcon;
