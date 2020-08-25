import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { Banner } from '../../../types/data';
import { BANNER_SCROLL_INTERVAL } from '../../../commons/constants';
import Indicator from '../../small/BannerIndicator';

interface Props {
  banners: Banner[];
}

function BannerSlider({ banners }: Props): React.ReactElement {
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const intervalId = useRef<number>(-1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalCount = banners.length;

  const autoScroll = () => {
    const { scrollLeft, offsetWidth } = listRef.current;

    listRef.current.scrollTo({
      left: scrollLeft + offsetWidth,
      behavior: 'smooth',
    });
  };

  const stopAutoScroll = () => {
    if (intervalId.current === -1) {
      return;
    }

    window.clearInterval(intervalId.current);
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalId.current = window.setInterval(autoScroll, BANNER_SCROLL_INTERVAL);
  };

  const initSlider = () => {
    listRef.current.scrollLeft = listRef.current.offsetWidth;
  };

  const updateIndicator = () => {
    const listElement = listRef.current;
    const { scrollLeft, scrollWidth, offsetWidth } = listElement;

    if (scrollWidth - offsetWidth - scrollLeft <= 0) {
      listElement.style.scrollBehavior = 'initial';
      listElement.scrollLeft = offsetWidth;
      listElement.style.scrollBehavior = 'smooth';
    }

    // 좌측 스크롤 끝에 도달했을 때
    if (scrollLeft <= 0) {
      listElement.style.scrollBehavior = 'initial';
      listElement.scrollLeft = scrollWidth - 2 * offsetWidth;
      listElement.style.scrollBehavior = 'smooth';
    }

    const newCurrentIndex = Math.round(listElement.scrollLeft / offsetWidth) - 1;
    if (newCurrentIndex < 0 || newCurrentIndex > totalCount - 1) {
      setCurrentIndex(totalCount - 1);
    } else {
      setCurrentIndex(newCurrentIndex);
    }
  };

  useEffect(() => {
    initSlider();
    startAutoScroll();
    listRef.current.addEventListener('mouseenter', stopAutoScroll);
    listRef.current.addEventListener('mouseleave', startAutoScroll);
    listRef.current.addEventListener('touchstart', stopAutoScroll);
    listRef.current.addEventListener('touchend', startAutoScroll);
    listRef.current.addEventListener('scroll', updateIndicator);

    return () => {
      stopAutoScroll();
      listRef.current.removeEventListener('mouseenter', stopAutoScroll);
      listRef.current.removeEventListener('mouseleave', startAutoScroll);
      listRef.current.removeEventListener('touchstart', stopAutoScroll);
      listRef.current.removeEventListener('touchend', startAutoScroll);
      listRef.current.removeEventListener('scroll', updateIndicator);
    };
  }, []);

  const slides = totalCount > 1 ? [banners[totalCount - 1], ...banners, banners[0]] : banners;
  return (
    <S.SliderContainer>
      <S.BannerList ref={listRef}>
        {slides.map((banner, i) => {
          return (
            <S.BannerItem key={i}>
              <S.BannerLink to={banner.redirectUrl}>
                <S.BannerImage src={banner.imageUrl} draggable="false" />
              </S.BannerLink>
            </S.BannerItem>
          );
        })}
      </S.BannerList>
      {slides && <Indicator currentIndex={currentIndex} totalCount={totalCount} />}
    </S.SliderContainer>
  );
}

export default BannerSlider;
