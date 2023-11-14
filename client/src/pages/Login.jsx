import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '../organism/LoginForm';
import { SpecialtyCard } from '../organism/SpecialtyCard';
// import { PersonalData } from '../organism/PersonalData';


const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  return (
    <LoginWrapper>
      {/* <LoginForm /> */}
      <SpecialtyCard />
      {/* <PersonalData /> */}
      
    </LoginWrapper>
    
  );
};

export default Login;
