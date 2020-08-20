import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { Banner } from '../../types/data';
import {
  BANNER_SCROLL_INTERVAL,
  BANNER_SCROLL_PREVENT_TOUCH_INTERVAL,
} from '../../commons/constants';
import Indicator from './Indicator';

interface Props {
  banners: Banner[];
}

function BannerSlider({ banners }: Props): React.ReactElement {
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const bannerRefs = useRef([]) as React.MutableRefObject<Array<HTMLLIElement>>;
  const intervalId = useRef<number>(0);
  const isAutoScroll = useRef<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalCount = banners.length;
  const bindBannerRef = (ref: HTMLLIElement | null, index: number) => {
    if (ref !== null) {
      bannerRefs.current[index] = ref;
    }
  };

  useEffect(() => {
    const tick = () => {
      setCurrentIndex((index: number) => {
        const firstItem = bannerRefs.current[0];
        const nextItem = bannerRefs.current[index + 1] || firstItem;

        isAutoScroll.current = true;
        listRef.current.scrollTo({
          left: nextItem.offsetLeft - firstItem.offsetLeft,
          behavior: 'smooth',
        });

        setTimeout(() => {
          isAutoScroll.current = false;
        }, BANNER_SCROLL_PREVENT_TOUCH_INTERVAL);

        index += 1;
        if (index >= totalCount) {
          index = 0;
        }
        return index;
      });
    };

    const resetInterval = (e: MouseEvent | TouchEvent) => {
      if (isAutoScroll.current) {
        e.preventDefault();
      }

      clearInterval(intervalId.current);
      intervalId.current = 0;
    };

    const revertInterval = () => {
      if (intervalId.current === 0) {
        intervalId.current = setInterval(tick, BANNER_SCROLL_INTERVAL);
      }
    };

    const updateIndicator = () => {
      setCurrentIndex(Math.round(listRef.current.scrollLeft / listRef.current.offsetWidth));
    };

    listRef.current.addEventListener('mouseenter', resetInterval);
    listRef.current.addEventListener('mouseleave', revertInterval);
    listRef.current.addEventListener('touchstart', resetInterval);
    listRef.current.addEventListener('touchend', revertInterval);
    listRef.current.addEventListener('scroll', updateIndicator);

    intervalId.current = setInterval(tick, BANNER_SCROLL_INTERVAL);
    return () => {
      clearInterval(intervalId.current);
    };
  }, [totalCount]);

  return (
    <S.SliderContainer>
      <S.BannerList ref={listRef}>
        {banners.map((banner, i) => {
          return (
            <S.BannerItem key={banner.id} ref={(ref) => bindBannerRef(ref, i)}>
              <S.BannerLink to={banner.redirectUrl}>
                <S.BannerImage src={banner.imageUrl} draggable="false" />
              </S.BannerLink>
            </S.BannerItem>
          );
        })}
      </S.BannerList>
      {banners && <Indicator currentIndex={currentIndex} totalCount={totalCount} />}
    </S.SliderContainer>
  );
}

export default BannerSlider;
