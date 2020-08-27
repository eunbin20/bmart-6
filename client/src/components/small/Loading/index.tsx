import React from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
  position: absolute;
  background: rgba(100, 100, 100, 0);
  width: 50px;
  height: 50px;
  border: 4px solid #fff;
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  animation: loading 1s linear infinite;
  -moz-animation: loading 1s linear infinite;
  -o-animation: loading 1s linear infinite;
  -webkit-animation: loading 1s linear infinite;
`;

const GrayBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background: rgba(100, 100, 100, 0.5);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export default function Loading() {
  return (
    <GrayBg>
      <ModalWrapper>
        <LoadingDiv />
      </ModalWrapper>
    </GrayBg>
  );
}
