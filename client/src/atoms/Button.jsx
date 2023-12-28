import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
  border-radius: 12px;
  color: ${({ color }) => (color ? color : '#fff')};
  outline: none;
  border: none;
  padding: 12px 16px;
  transition: 0.2s;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};

  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
    transition: 0.2s;
    color: black;
  }
  width: ${({ width }) => (width ? width : '100%')};
  color: ${({ color }) => (color ? color : 'white')};
`;

export const Button = ({
  type,
  text,
  onClick,
  bgColor,
  width,
  color,
  fontSize,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      bgColor={bgColor}
      width={width}
      color={color}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  );
};
