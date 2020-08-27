import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { IData } from '../../../types/data';
import { EMOJI_DATA } from '../../../commons/constants';

/* 땡겨요 기능은 2조 명우님의 코드를 참고하였습니다. by 동욱*/
/* 땡겨요 기능은 2조 명우님의 코드를 참고하였습니다. by 동욱*/
/* 땡겨요 기능은 2조 명우님의 코드를 참고하였습니다. by 동욱*/

interface IPull {
  boxHeight: number;
  isPulling: boolean;
}

const range = 40;
const rangeHalf = range / 2;
const defaultTopHeight = 0;
const minBoxSize = 70;

let isFinishingState = false;
let isBeforeEnd = false;
let dataIdx = 0;
let isRealFinish = false;
let lastDataIdx = 0;
let lastText = '';

const getRandomIdx = () => {
  const randomIndex = Math.floor(Math.random() * EMOJI_DATA.length);
  lastDataIdx = randomIndex;
  return randomIndex;
};

const shuffle = (array: IData[]) => {
  array.sort(() => Math.random() - 0.5);
};

export default function Slot({ boxHeight, isPulling }: IPull) {
  const [imgTopHeight, setImgTopHeight] = useState(defaultTopHeight);
  const isPullingFinished = boxHeight === minBoxSize && !isPulling;
  const pullContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxHeight === 0) isBeforeEnd = false;
    if (isFinishingState || isBeforeEnd) return;
    if (isPullingFinished) {
      isFinishingState = true;
      isBeforeEnd = true;
      const slotAnimation = () => {
        const maxTime = 1000;
        let time = 0;
        const timeDiff = 30;
        const changeTopHeight = () => {
          setTimeout(() => {
            if (time >= maxTime) {
              dataIdx = -1;
              setImgTopHeight(0);
              isFinishingState = false;
              lastText = EMOJI_DATA[lastDataIdx].text;
              shuffle(EMOJI_DATA);
              isRealFinish = true;
              return;
            }
            setImgTopHeight(((maxTime - time) % range) - rangeHalf);
            dataIdx =
              Math.round(Math.abs((maxTime - time + rangeHalf) / range)) % EMOJI_DATA.length;
            time += timeDiff;
            changeTopHeight();
          }, timeDiff);
        };
        changeTopHeight();
      };
      slotAnimation();
    } else {
      setImgTopHeight((boxHeight % range) - rangeHalf);
      dataIdx = Math.round(Math.abs((boxHeight + rangeHalf) / range)) % EMOJI_DATA.length;
    }
  }, [boxHeight, isPullingFinished]);

  const transformOption = () => {
    const newHight = boxHeight / 4;
    if (newHight <= 0 || newHight >= window.innerHeight) {
      return `translate(0px, 0px)`;
    }
    return `translateY(${newHight}px)`;
  };

  const renderText = (dataIdx: number) => {
    if (isRealFinish) {
      return lastText;
    }
    if (dataIdx === -1) {
      return EMOJI_DATA[getRandomIdx()].text;
    }
    return EMOJI_DATA[dataIdx].emoji;
  };

  return (
    <S.SlotContainer style={{ transform: transformOption() }} ref={pullContainerRef}>
      <S.SlotWrap>{renderText(dataIdx)}</S.SlotWrap>
      <S.SlotItem>땡겨요</S.SlotItem>
    </S.SlotContainer>
  );
}
