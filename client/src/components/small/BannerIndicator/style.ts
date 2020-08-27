import styled from 'styled-components';

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 2.4vw;
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

interface IndicatorCircleProps {
  active: boolean;
}

export const IndicatorCircle = styled.div`
  display: inline-block;
  width: 2.667vw;
  height: 2.667vw;
  border-radius: 1.6vw;
  margin-right: 2.667vw;
  transition: background 0.4s ease-in-out;
  background: ${(props: IndicatorCircleProps) =>
    props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)'};

  &:last-child {
    margin-right: 0;
  }
`;
