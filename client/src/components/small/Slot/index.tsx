import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

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

interface IData {
  emoji: string;
  text: string;
}
const datas: IData[] = [
  {
    emoji: '🥯',
    text: '동킨 도낫츠',
  },
  {
    emoji: '🥞',
    text: '건포도 팬 케이크',
  },
  {
    emoji: '🍗',
    text: '간장 칰힌',
  },
  {
    emoji: '🍔',
    text: '수제 햄바그',
  },
  {
    emoji: '🌯',
    text: '치킨 부리또',
  },
  {
    emoji: '🍙',
    text: '개등딱지 삼각김밥',
  },
  {
    emoji: '🥘',
    text: '매운 부대찌개',
  },
  {
    emoji: '🥗',
    text: '다이어트 샐러드',
  },
];

let isFinishingState = false;
let isBeforeEnd = false;
let dataIdx = 0;
let isRealFinish = false;
let lastDataIdx = 0;
let lastText = '';

const getRandomIdx = () => {
  const randomIndex = Math.floor(Math.random() * datas.length);
  lastDataIdx = randomIndex;
  return randomIndex;
};

const shuffle = (array: IData[]) => {
  array.sort(() => Math.random() - 0.5);
};

const Slot = ({ boxHeight, isPulling }: IPull) => {
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
              lastText = datas[lastDataIdx].text;
              console.log('2', lastText);
              shuffle(datas);
              isRealFinish = true;
              return;
            }
            setImgTopHeight(((maxTime - time) % range) - rangeHalf);
            dataIdx = Math.round(Math.abs((maxTime - time + rangeHalf) / range)) % datas.length;
            time += timeDiff;
            changeTopHeight();
          }, timeDiff);
        };
        changeTopHeight();
      };
      slotAnimation();
    } else {
      setImgTopHeight((boxHeight % range) - rangeHalf);
      dataIdx = Math.round(Math.abs((boxHeight + rangeHalf) / range)) % datas.length;
    }
  }, [boxHeight, isPullingFinished]);

  const transformOption = () => {
    const newHight = boxHeight / 4;
    if (newHight <= 0 || newHight >= window.innerHeight) {
      return `translate(0px, 0px)`;
    }
    return `translate(0px, ${newHight}px)`;
  };

  const renderText = (dataIdx: number) => {
    if (isRealFinish) {
      return lastText;
    }
    if (dataIdx === -1) {
      return datas[getRandomIdx()].text;
    }
    return datas[dataIdx].emoji;
  };

  return (
    <S.SlotContainer style={{ transform: transformOption() }} ref={pullContainerRef}>
      <S.SlotWrap>{renderText(dataIdx)}</S.SlotWrap>
      <S.SlotItem>땡겨요</S.SlotItem>
    </S.SlotContainer>
  );
};

export default Slot;
