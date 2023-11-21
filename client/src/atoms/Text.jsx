import React from 'react';
import styled from 'styled-components';


export const TextContainer = styled.div`
  color: ${({ color }) => (color ? color : '#fff')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '26px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '300')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  text-align: ${({ textAlign }) => textAlign};

  @media screen and (max-width: 450px) {
    font-size: ${({ fontSizePhone }) => (fontSizePhone ? fontSizePhone : '16px')};
    line-height:  ${({ lineHeightPhone }) => (lineHeightPhone ? lineHeightPhone : '32px')};
  }
`;

export const Text = ({ fontSize, children, fontSizePhone, fontWeight, lineHeight, lineHeightPhone, color, textAlign }) => {
  return <TextContainer fontSize={fontSize} fontSizePhone={fontSizePhone} fontWeight={fontWeight} lineHeight={lineHeight} lineHeightPhone={lineHeightPhone} color={color} textAlign={textAlign}>{children}</TextContainer>;
};