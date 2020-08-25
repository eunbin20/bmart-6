import styled from 'styled-components';

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 9px;
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

interface IndicatorCircleProps {
  active: boolean;
}

export const IndicatorCircle = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 6px;
  margin-right: 10px;
  transition: background 0.4s ease-in-out;
  background: ${(props: IndicatorCircleProps) =>
    props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)'};

  &:last-child {
    margin-right: 0;
  }
`;
