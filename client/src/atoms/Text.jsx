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
};
