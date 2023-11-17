import React from 'react';
import styled from 'styled-components';


export const TextContainer = styled.div`
line-height: 32px;
color: #fff;
font-weight: ${({ weight }) => (weight ? weight : '300')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
`;

export const Text = ({ fontSize, children, weight, textAlign }) => {
  return <TextContainer fontSize={fontSize} weight={weight} textAlign={textAlign}>{children}</TextContainer>;
};
