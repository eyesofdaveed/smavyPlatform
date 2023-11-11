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
`;

export const Button = ({ type, text, onClick, bgColor}) => {
  return (
    <StyledButton type={type} onClick={onClick} bgColor={bgColor}>
      {text}
    </StyledButton>
  );
};
