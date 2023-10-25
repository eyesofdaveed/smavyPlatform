import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #fff;
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 12px 16px;
  width: 80%;
`;

const Input = (props) => {
  debugger;
  return <StyledInput
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    required={props.required}
    value={props.value}
    onChange={props.onChange} />;
};

export default Input;
