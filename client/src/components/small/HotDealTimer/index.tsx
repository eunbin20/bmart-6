import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as S from './style';

interface Props {
  expiredDate: string;
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const stringToDate = (dateStr: string): Date => {
  const date = new Date(dateStr.replace(/-/g, '/'));
  return date;
};

const padNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};

function HotDealTimer({ expiredDate }: Props): React.ReactElement {
  const intervalId = useRef<number>();
  const endDate: Date = useMemo(() => stringToDate(expiredDate), [expiredDate]);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const distance = endDate.getTime() - now.getTime();

      const days = Math.floor(distance / DAY);
      const hours = Math.floor((distance % DAY) / HOUR) + days * 24;
      const minutes = Math.floor((distance % HOUR) / MINUTE);
      const seconds = Math.floor((distance % MINUTE) / SECOND);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    tick();
    intervalId.current = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, [endDate]);

  return (
    <S.TimerContainer>
      <S.TimeBox>{padNumber(hours)}</S.TimeBox>
      <S.TimeDivider />
      <S.TimeBox>{padNumber(minutes)}</S.TimeBox>
      <S.TimeDivider />
      <S.TimeBox>{padNumber(seconds)}</S.TimeBox>
    </S.TimerContainer>
  );
}

export default HotDealTimer;
