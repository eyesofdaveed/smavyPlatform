import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from '@assets/img/background.png';
import backgroundMobileImage from '@assets/img/backgroundMobile.png';
import { LoginForm } from '@organism/LoginForm';
import { RegistrationForm } from '@organism/RegistrationForm';
import { PasswordReset } from '@pages/PasswordReset';
import { WelcomePage } from '@pages/WelcomePage';

const BackgroundWrapper = styled.div`
  display: flex;
  background-image: url(${backgroundImage});
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 450px) {
    background-image: url(${backgroundMobileImage});
  }
`;

export const Public = () => {
  return (
    <BackgroundWrapper>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
      </Routes>
    </BackgroundWrapper>
  );
};
