import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;
export const TimeBox = styled.div`
  padding: 4px 0;
  width: 22px;
  text-align: center;
  color: var(--white);
  font-weight: bold;
  background: var(--red);
  border-radius: 4px;
  letter-spacing: -0.05em;
`;

export const TimeDivider = styled.div`
  &::before {
    content: ':';
    font-weight: bold;
    padding: 0 2px;
  }
`;
