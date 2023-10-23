import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #fff;
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 12px 16px;
  width: 100%;
`;

const Input = ({ placeholder = '', type = 'text' }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

export default Input;
