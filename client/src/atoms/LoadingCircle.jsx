import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoadingCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid rgba(0, 200, 255, 0.1);
  border-top-color: rgba(0, 200, 255, 1);
  background: transparent;

  position: absolute;
  top: 48%;
  left: 48%;

  animation: ${rotate} 2s linear infinite;
`;

export const LoadingCircle = () => {
  return <StyledLoadingCircle />;
};
