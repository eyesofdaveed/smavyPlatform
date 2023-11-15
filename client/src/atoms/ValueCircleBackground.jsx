import React from 'react';
import styled from 'styled-components';

import { colors } from '@base';

export const ValueContainer = styled.div`
  background-color:  ${({ bgColor }) => (bgColor ? bgColor : `${colors.white}`)};
  border-radius:  ${({ borderRadius }) => (borderRadius ? borderRadius : `18px`)};
  padding: ${({ padding }) => (padding ? padding : `2px 0px 5px 10px`)};
  margin : ${({ margin }) => (margin ? margin : `0px`)} ;
  width: ${({ width }) => (width ? width : `300px`)};
  
  @media (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const ValueBackround = ({ width,  children , borderRadius, padding, bgColor, margin }) => {
  return <ValueContainer width={width} borderRadius={borderRadius} padding={padding} bgColor={bgColor} margin={margin} > {children}</ValueContainer>;
};
