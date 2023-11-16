import React from 'react';
import styled from 'styled-components';


export const TextContainer = styled.div`
  text-align: ${({textAlign }) => textAlign};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  line-height: 32px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  color: #fff;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const Text = ({ fontSize, children, fontSizePhone, fontWeight, lineHeight, lineHeightPhone , color }) => {
  return <TextContainer fontSize={fontSize} fontSizePhone={fontSizePhone} color={color} fontWeight={fontWeight} lineHeight={lineHeight} lineHeightPhone={lineHeightPhone}>{children}</TextContainer>;
};