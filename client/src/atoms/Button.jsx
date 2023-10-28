import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #fff;
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

const Button = ({ type, text, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
