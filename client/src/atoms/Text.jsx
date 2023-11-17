import React from 'react';
import styled from 'styled-components';


export const TextContainer = styled.div`
  text-align: ${({textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '26px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: ${({ color }) => (color ? color : '#fff')};

  @media screen and (max-width: 450px) {
    font-size: ${({ fontSizePhone }) => (fontSizePhone ? fontSizePhone : '16px')};
    line-height:  ${({ lineHeightPhone }) => (lineHeightPhone ? lineHeightPhone : '32px')};
  }
`;

export const Text = ({ fontSize, children, fontSizePhone, fontWeight, lineHeight, lineHeightPhone, color }) => {
  return <TextContainer fontSize={fontSize} color={color} fontSizePhone={fontSizePhone} fontWeight={fontWeight} lineHeight={lineHeight} lineHeightPhone={lineHeightPhone}>{children}</TextContainer>;
};
