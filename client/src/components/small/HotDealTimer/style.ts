import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 3.467vw;
`;
export const TimeBox = styled.div`
  padding: 1.067vw 0;
  width: 5.867vw;
  text-align: center;
  color: var(--white);
  font-weight: bold;
  background: var(--red);
  border-radius: 1.067vw;
  letter-spacing: -0.05em;
`;

export const TimeDivider = styled.div`
  &::before {
    content: ':';
    font-weight: bold;
    padding: 0 0.533vw;
  }
`;
