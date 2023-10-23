import React from 'react';
import styled from 'styled-components';

import Card from '../atoms/Card';
import Text from '../atoms/Text';
import Input from '../atoms/Input';
import Flexbox from '../atoms/Flexbox';
import { sizes } from '../base/index';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = () => {
  return (
    <LoginWrapper>
      <Card>
        <Flexbox direction="column" gap="8px" align="flex-start">
          <Text fontSize={sizes.xLarge}>Вход</Text>
          <Flexbox direction="column">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Ваш пароль" type="password" />
          </Flexbox>
          <Flexbox>
            <Text fontSize={sizes.small}>Забыли пароль?</Text>
            <Text fontSize={sizes.small}>Зарегестрироваться </Text>
          </Flexbox>
        </Flexbox>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
