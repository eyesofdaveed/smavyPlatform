import React from 'react';
import styled from 'styled-components';

import { Button, Card, Flexbox, Input, Text } from '@atoms';
import { colors, sizes } from '@base';

const ResetPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right, #deebfe, #b3ccf2);
`;

export const PasswordReset = () => {
  return (
    <ResetPasswordWrapper>
      <Card width="400px">
        <Flexbox direction="column" gap="12px" align="flex-start">
          <Text fontSize={sizes.xLarge} weight="bold">
            Восстановить пароль
          </Text>
          <Flexbox direction="column">
            <Text fontSize={sizes.small}>
              На Ваш e-mail будет выслана ссылка для восстановления пароля
            </Text>
          </Flexbox>
          <Flexbox direction="column" width="100%">
            <Input
              placeholder="Ваш e-mail"
              type="email"
              width="95%"
              height="48px"
            />
            <Button
              type="submit"
              fontSize="23px"
              text="Восстановить пароль"
              bgColor={colors.btnPrimary}
            />
          </Flexbox>
          <Flexbox justify="flex-end" width="100%">
            <a style={{ textDecoration: 'none' }} href="/login">
              <Text fontSize={sizes.small}>Вернуться на страницу входа</Text>
            </a>
          </Flexbox>
        </Flexbox>
      </Card>
    </ResetPasswordWrapper>
  );
};
