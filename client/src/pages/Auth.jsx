import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '../organism/LoginForm';
import { RegistrationForm } from '../organism/RegistrationForm';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from './WelcomePage';
import background from '@assets/img/background.png'
import backgroundMobile from '@assets/img/backgroundMobile.png'


const Background = styled.div`
  display: flex;
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  object-fit:cover;

  @media screen and (max-width:450px){
    background-image:url(${backgroundMobile});
    
  }
`;

export const Auth = () => {
  return (
    <Background>
      <Routes>
        <Route path='/' element={ <WelcomePage />}/>
        <Route path='/login' element={ <LoginForm />}/>
        <Route path='/register' element={ <RegistrationForm />}/>
      </Routes>
    </Background>
  );
};

