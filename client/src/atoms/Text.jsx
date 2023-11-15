import React from 'react';
import styled from 'styled-components';


export const TextContainer = styled.div`

  // src: url('fonts/Inter.ttf');    
  // font-family:'sans-serif';
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  line-height: 32px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: #fff;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const Text = ({ fontSize, children, weight, textAlign }) => {
  return <TextContainer fontSize={fontSize} weight={weight} textAlign={textAlign}>{children}</TextContainer>;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '26px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: ${({ color }) => (color ? color : '#fff')};

  @media screen and (max-width: 450px) {
    font-size: ${({ fontSizePhone }) => (fontSizePhone ? fontSizePhone : '16px')};
    line-height:  ${({ lineHeightPhone }) => (lineHeightPhone ? lineHeightPhone : '32px')};
  }
`;

export const Text = ({ fontSize, children, fontSizePhone, fontWeight, lineHeight, lineHeightPhone }) => {
  return <TextContainer fontSize={fontSize} fontSizePhone={fontSizePhone} fontWeight={fontWeight} lineHeight={lineHeight} lineHeightPhone={lineHeightPhone}>{children}</TextContainer>;
};
