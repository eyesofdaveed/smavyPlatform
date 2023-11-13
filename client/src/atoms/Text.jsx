import React from 'react';
import styled from 'styled-components';

export const TextContainer = styled.div`
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '26px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: ${({ color }) => (color ? color : '#fff')};
`;


export const Text = ({ fontSize, fontWeight, lineHeight, color, children }) => {
  return <TextContainer fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>{children}</TextContainer>;
};
