import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '../organism/LoginForm';


const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
    
  );
};

export default Login;
