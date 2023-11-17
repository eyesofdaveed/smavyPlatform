import React from 'react';
import styled from 'styled-components';


export const StyledButton = styled.button`
  background-color:${({ bgColor }) => (bgColor ? bgColor : '#fff')};
  border-radius: 12px;
  color:${({color}) => color ? color : '#fff'};
  outline: none;
  border: none;
  padding: 12px 16px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;

export const Button = ({ type, text, onClick, bgColor,color}) => {
  return (
    <StyledButton type={type} onClick={onClick} bgColor={bgColor} color={color}>
      {text}
    </StyledButton>
  );
};
