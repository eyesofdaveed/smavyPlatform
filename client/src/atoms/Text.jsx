import React from 'react';
import styled from 'styled-components';


export const TextContainer = styled.div`
line-height: 32px;
color: #fff;
font-weight: ${({ weight }) => (weight ? weight : '300')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const Text = ({ fontSize, children, fontSizePhone, fontWeight, lineHeight, lineHeightPhone , color }) => {
  return <TextContainer fontSize={fontSize} fontSizePhone={fontSizePhone} color={color} fontWeight={fontWeight} lineHeight={lineHeight} lineHeightPhone={lineHeightPhone}>{children}</TextContainer>;
};