import React, { useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Slot } from '../../../components';

/* 땡겨요 기능은 2조 명우님의 코드를 참고하였습니다. by 동욱*/
/* 땡겨요 기능은 2조 명우님의 코드를 참고하였습니다. by 동욱*/
/* 땡겨요 기능은 2조 명우님의 코드를 참고하였습니다. by 동욱*/

const Wrap = styled.div<{
  transitionTime: number;
}>`
  transition: all ${(props) => `${props.transitionTime}`}ms linear;
  overflow-y: hidden;
  overflow-x: hidden;
  top: -40px; // slot height
  position: relative;
`;
const ChildrenWraper = styled.div``;

interface Props {
  children: React.ReactNode;
}

interface IPos {
  x: number;
  y: number;
}
let lastTouch: IPos = { x: 0, y: 0 };
let startTouch: IPos = { x: 0, y: 0 };
const minBoxSize = 70;

const defaultTransitionTime = 0;
const finishTransitionTime = 200;
let isPulling = false;
let isFinishing = false;
let isTouchStart = false;

function isPullDown(dy: number, dx: number) {
  const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
  return angleDeg > 60 && angleDeg < 120;
}

export default function BindPullEvent({ children }: Props) {
  const [boxHeight, setBoxHeight] = useState(0);
  const transitionContainerRef = useRef<HTMLDivElement>(null);

  const getSlot = useMemo(() => {
    return <Slot boxHeight={boxHeight} isPulling={isPulling} />;
  }, [boxHeight]);

  const transformOption = () => {
    if (boxHeight <= 0) return `translate(0px, 0px)`;
    return `translate(0px, ${boxHeight}px)`;
  };

  const setTransitionTime = (time: number) => {
    if (transitionContainerRef.current) {
      if (transitionContainerRef.current.style) {
        transitionContainerRef.current.style.transition = `transform ${time}ms linear`;
      }
    }
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    isTouchStart = true;
    if (isPulling) return;
    setTransitionTime(defaultTransitionTime);
    if (event.targetTouches && !isPulling) {
      const touch = event.targetTouches[0];
      lastTouch = { x: touch.clientX, y: touch.clientY };
      startTouch = { x: touch.clientX, y: touch.clientY };
      isPulling = true;
    }
  };

  const setBoxHeightByDiff = (touch: React.Touch) => {
    const defaultPadding = 0;
    const heightDiffer =
      touch.clientY - startTouch.y + (isFinishing ? minBoxSize + defaultPadding : 0);
    const newHeight = Math.round(heightDiffer / 2);
    if (newHeight === boxHeight) return;
    setBoxHeight(newHeight);
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isPulling) return;
    const { touches } = event;
    const touch = touches[0];
    if (!isPullDown(touch.clientY - lastTouch.y, touch.clientX - lastTouch.x)) return;
    if (touch.clientY - lastTouch.y > 0 && isScrollInTop()) {
      lastTouch = { x: touch.clientX, y: touch.clientY };
    }
    setBoxHeightByDiff(touch);
  };

  const isScrollInTop = () => {
    return window.scrollY === 0;
  };

  const setBoxHeightToZero = () => {
    const second = 2;
    setTransitionTime(finishTransitionTime);
    setBoxHeight(minBoxSize);
    if (isFinishing) return;
    isFinishing = true;
    // finish동작은 동작 중 1번만 일어나게
    setTimeout(() => {
      const intervalDelay = 100;
      const intervalId = setInterval(() => {
        if (!isTouchStart) {
          setBoxHeight(0);
          isFinishing = false;
          clearInterval(intervalId);
          const reflashDelay = 400;
          setTimeout(() => {
            window.location.reload(false);
          }, reflashDelay);
        }
      }, intervalDelay);
    }, second * 1000);
  };

  const onTouchEnd = () => {
    if (boxHeight > minBoxSize) {
      setBoxHeightToZero();
    } else {
      setBoxHeight(0);
    }
    isPulling = false;
    isTouchStart = false;
  };

  return (
    <>
      {getSlot}
      <Wrap
        transitionTime={defaultTransitionTime}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ChildrenWraper style={{ transform: transformOption() }} ref={transitionContainerRef}>
          {children}
        </ChildrenWraper>
      </Wrap>
    </>
  );
}
