import React from 'react';
import styled from 'styled-components';
import { RegistrationForm } from '../organism/RegistrationForm';

const RegistrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Registration = () => {
  return (
    <RegistrationWrapper>
      <RegistrationForm />
    </RegistrationWrapper>
  );
};
