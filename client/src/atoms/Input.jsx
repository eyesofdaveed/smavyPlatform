import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #fff;
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 12px 16px;
  width: ${({ width }) => (width ? width : '100%')};
`;

const Input = ({ type, placeholder, required, value, onChange, width }) => {
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
      onChange={handleInputChange}
    />
  );
};

export default Input;
