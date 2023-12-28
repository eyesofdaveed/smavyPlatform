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
    <Card width="450px">
      <Flexbox direction="column" gap="12px" align="flex-start" padding="10px">
        <Text fontSize={sizes.xLarge} weight="bold">
          Восстановить пароль
        </Text>
        <Text fontSize={sizes.small} lineHeight="15px">
          На Ваш e-mail будет выслана ссылка для восстановления пароля
        </Text>
        <Flexbox direction="column" width="95%">
          <Input
            placeholder="Ваш e-mail"
            type="email"
            width="95%"
            height="48px"
          />
          <Button
            type="submit"
            fontSize={sizes.small}
            text="Восстановить пароль"
            bgColor={colors.btnPrimary}
          />
        </Flexbox>
        <Flexbox justify="flex-end" width="93%" margin="10pxx">
          <a style={{ textDecoration: 'none' }} href="/login">
            Вернуться на страницу входа
          </a>
        </Flexbox>
      </Flexbox>
    </Card>
  );
};
