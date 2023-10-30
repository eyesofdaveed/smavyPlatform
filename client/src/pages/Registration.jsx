import React from 'react';
import styled from 'styled-components';
import RegistrationForm from '../organism/RegistrationForm';

const RegistrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Registration = () => {
  return (
    <RegistrationWrapper>
      <RegistrationForm />
    </RegistrationWrapper>
  );
};

export default Registration;
