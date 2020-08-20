import React from 'react';
import * as S from './style';

interface Props {
  currentIndex: number;
  totalCount: number;
}

function BannerIndicator({ currentIndex, totalCount }: Props): React.ReactElement {
  return (
    <S.IndicatorContainer>
      {Array(totalCount)
        .fill(0)
        .map((_, index) => (
          <S.IndicatorCircle key={index} active={index === currentIndex} />
        ))}
    </S.IndicatorContainer>
  );
}

export default BannerIndicator;
