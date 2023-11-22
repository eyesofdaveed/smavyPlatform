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
  box-shadow: ${({ boxShadow }) => boxShadow};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};

  @media screen and (max-width: 1620px) {
    width: ${({widthLaptop }) => widthLaptop};
  }
  @media screen and (max-width: 768px) {
    width: ${({widthTablet }) => widthTablet};
  }
  @media screen and (max-width: 450px) {
    width: ${({widthPhone }) => widthPhone};
  }
`;

export const Input = ({ type, placeholder, required, value, onChange, width, widthLaptop, widthTablet, widthPhone, boxShadow, fontSize }) => {
  const handleInputChange = e => {
    onChange(e.target.value);
  };

  return (
    <StyledInput
      width={width}
      widthLaptop={widthLaptop}
      widthTablet={widthTablet}
      widthPhone={widthPhone}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      boxShadow={boxShadow}
      fontSize={fontSize}
      height={height}
      onChange={handleInputChange}
    />
  );
};