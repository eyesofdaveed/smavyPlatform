import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: #fff;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 0 10px;
  height: ${({ height }) => (height ? height : '40px')};
  width: ${({ width }) => (width ? width : '100%')};
  box-shadow: ${({ boxShadow }) => boxShadow};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};

  @media screen and (max-width: 1620px) {
    width: ${({ widthLaptop }) => widthLaptop};
  }
  @media screen and (max-width: 768px) {
    width: ${({ widthTablet }) => widthTablet};
  }
  @media screen and (max-width: 450px) {
    width: ${({ widthPhone }) => widthPhone};
  }
`;

export const Input = ({
  type,
  placeholder,
  required,
  value,
  width,
  widthLaptop,
  widthTablet,
  widthPhone,
  boxShadow,
  fontSize,
  height,
  name,
  onChange,
}) => {
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
      name={name}
      onChange={onChange}
    />
  );
};
