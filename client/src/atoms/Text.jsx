import React from 'react';
import styled from 'styled-components';

export const TextContainer = styled.div`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  line-height:  ${({ lineHeight }) => (lineHeight ? lineHeight : '32px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: #fff;

  @media screen and (max-width: 450px) {
    font-size: ${({ fontSizePhone }) => (fontSizePhone ? fontSizePhone : '16px')};
    line-height:  ${({ lineHeightPhone }) => (lineHeightPhone ? lineHeightPhone : '32px')};
  }
`;

export const Text = ({ fontSize, children, fontSizePhone, fontWeight, lineHeight, lineHeightPhone }) => {
  return <TextContainer fontSize={fontSize} fontSizePhone={fontSizePhone} fontWeight={fontWeight} lineHeight={lineHeight} lineHeightPhone={lineHeightPhone}>{children}</TextContainer>;
};
