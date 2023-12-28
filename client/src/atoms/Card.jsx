import React from 'react';
import styled from 'styled-components';

import { colors } from '@base';

export const CardContainer = styled.div`
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : `${colors.cardBg}`};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '30px'};
  padding: ${({ padding }) => (padding ? padding : '10px 10px')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  display: ${({ display }) => (display ? display : 'inline-block')};
  width: ${({ width }) => (width ? width : '100%')};

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const Card = ({
  width,
  children,
  color,
  borderRadius,
  padding,
  display,
  direction,
  justify,
  bgColor,
  align,
}) => {
  return (
    <CardContainer
      width={width}
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      bgColor={bgColor}
      display={display}
      direction={direction}
      justify={justify}
      align={align}
    >
      {children}
    </CardContainer>
  );
};
