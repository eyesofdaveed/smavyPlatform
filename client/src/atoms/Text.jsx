import React from 'react';
import styled from 'styled-components';

export const TextContainer = styled.div`
  color: ${({ color }) => (color ? color : '#fff')};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '26px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '300')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  text-align: ${({ textAlign }) => textAlign};
  transition: 0.1s;

  @media screen and (max-width: 950px) {
    font-size: ${({ fontSizeTablet }) =>
      fontSizeTablet ? fontSizeTablet : '16px'};
    line-height: ${({ lineHeightTablet }) =>
      lineHeightTablet ? lineHeightTablet : '20px'};
  }

  @media screen and (max-width: 450px) {
    font-size: ${({ fontSizePhone }) =>
      fontSizePhone ? fontSizePhone : '12px'};
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '15px')};
  }
`;

export const Text = ({
  fontSize,
  children,
  fontSizeTablet,
  fontSizePhone,
  fontWeight,
  lineHeight,
  lineHeightTablet,
  lineHeightPhone,
  color,
  textAlign,
}) => {
  return (
    <TextContainer
      fontSize={fontSize}
      fontSizeTablet={fontSizeTablet}
      fontSizePhone={fontSizePhone}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      lineHeightTablet={lineHeightTablet}
      lineHeightPhone={lineHeightPhone}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </TextContainer>
  );
};
