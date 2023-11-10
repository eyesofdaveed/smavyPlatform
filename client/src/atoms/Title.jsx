import React from 'react';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '170px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '150px')};
  color: ${({ color }) => (color ? color : '#737399')};

  @media screen and (max-width: 450px) {
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '100px')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '90px')};
  }
`;
    
export const Title = ({ fontSize, fontWeight, lineHeight, color, children }) => {
  return <TitleContainer fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} color={color}>{children}</TitleContainer>;
};
