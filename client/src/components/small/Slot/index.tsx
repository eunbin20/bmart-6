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

const getRandomIdx = () => {
  return Math.floor(Math.random() * datas.length);
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
              shuffle(datas);
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

  return (
    <S.SlotContainer style={{ transform: transformOption() }} ref={pullContainerRef}>
      <S.SlotWrap>
        {dataIdx === -1 ? `${datas[getRandomIdx()].text}` : datas[dataIdx].emoji}
      </S.SlotWrap>
      <S.SlotItem>땡겨요</S.SlotItem>
    </S.SlotContainer>
  );
};

export default Slot;
