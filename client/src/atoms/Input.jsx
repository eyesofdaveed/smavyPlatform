import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: #fff;
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 12px 16px;
  width: ${({ width }) => (width ? width : '100%')};
  box-shadow: ${({ boxShadow }) => boxShadow};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
`;

export const Input = ({ type, placeholder, required, value, onChange, width, boxShadow, fontSize }) => {
  const handleInputChange = e => {
    onChange(e.target.value);
  };

  return (
    <StyledInput
      width={width}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      boxShadow={boxShadow}
      fontSize={fontSize}
      onChange={handleInputChange}
    />
  );
};