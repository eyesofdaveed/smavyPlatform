import React from 'react';
import styled from 'styled-components';

import { colors } from '@base';

export const CardContainer = styled.div`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : `${colors.cardBg}`)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '30px')};
  padding: ${({ padding }) => (padding ? padding : '24px 16px')};
  display:${({ display }) => (display ? display : 'inline-block')};
  width: ${({ width }) => (width ? width : '100%')};
`;

export const Card = ({ width,  children , color, borderRadius, padding, display, bgColor}) => {
  return <CardContainer width={width} color={color} borderRadius={borderRadius} padding={padding} bgColor={bgColor} display={display} >{children}</CardContainer>;
};
