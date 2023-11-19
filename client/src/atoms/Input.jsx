import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: #fff;
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 0 10px;
  height: ${({ height }) => (height ? height : '100%')};
  width: ${({ width }) => (width ? width : '100%')};
`;

export const Input = ({ type, placeholder, required, value, onChange, width,height }) => {
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
      height={height}
      onChange={handleInputChange}
    />
  );
};