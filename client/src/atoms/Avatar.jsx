import React from 'react';
import styled from 'styled-components';

export const StyledAvatar = styled.img`
  border-radius: 12px;
  width: ${({ width }) => (width ? width : '70px')};
  height: ${({ width }) => (width ? width : '70px')};

`;

export const Avater = ({ src, width, height }) => {
  return (
    <StyledAvatar
      width={width}
      src={src}
      height={height}
    />
  );
};