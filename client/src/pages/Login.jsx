import React from 'react';
import styled from 'styled-components';
import {Form} from '../organism';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Form />
    </LoginWrapper>
  );
};

export default Login;
