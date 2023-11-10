import React from 'react';
import styled from 'styled-components';

export const TextContainer = styled.div`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '32px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: ${({ color }) => (color ? color : '#fff')};
`;

export const Text = ({ fontSize, children, color, fontWeight, lineHeight }) => {
  return <TextContainer fontSize={fontSize} color={color}  fontWeight={fontWeight} lineHeight={lineHeight} >{children}</TextContainer>;
};
