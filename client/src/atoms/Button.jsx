import React from 'react';
import styled from 'styled-components';


export const StyledButton = styled.button`
  background-color:${({ bgColor }) => (bgColor ? bgColor : '#fff')};
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 12px 16px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
  width: ${({ width }) => (width ? width : '100%')};
  color: ${({ color }) => (color ? color : 'white')};
`;

export const Button = ({ type, text, onClick, bgColor, width, color}) => {
  return (
    <StyledButton type={type} onClick={onClick} bgColor={bgColor} width={width} color={color} >
      {text}
    </StyledButton>
  );
};
