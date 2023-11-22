import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../atoms/Button';
import { colors } from '../base';

const WelcomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <WelcomePageWrapper>
      <Flexbox direction="column" align="center">
        <Title>Welcome page</Title>
          <Button onClick={()=> navigate('/registration')} bgColor={colors.btnPrimary} color='white' text='Зарегестрироватся' />
        <Text color={"#000"} fontSize={"18px"}>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </Text>
      </Flexbox>
    </WelcomePageWrapper>
  );
};
