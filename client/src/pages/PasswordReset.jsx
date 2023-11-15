import React from "react";
import styled from "styled-components";

import { Card, Button, Text, Input, Flexbox } from '@atoms';
import { sizes, colors, weight, aligns } from '@base';

const ResetPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right, #DEEBFE , #B3CCF2);
`;




const PasswordReset = () => {
  return (
    <ResetPasswordWrapper>
      <Card width="500px">
        <Flexbox direction="column" gap="12px" align="flex-start">
          <Text textAlign={aligns.left} fontSize={sizes.xLarge} weight={weight.middle}>Восстановить пароль</Text>
          <Flexbox direction="column">
            <Text fontSize={sizes.medium}>
              На Ваш e-mail будет выслана ссылка для восстановления пароля
            </Text>
          </Flexbox>
          <Flexbox direction="column">
            <Input width="65vh" placeholder="Ваш e-mail" type="email"/>
          </Flexbox>
          <Flexbox>
            <Button width="70vh" type="submit" text="Восстановить пароль" bgColor={colors.btnPrimary}/>
          </Flexbox>
          <Flexbox>
            <a href="/login"><Text fontSize={sizes.medium} textAlign={aligns.right} weight={weight.light}>Вернуться на страницу входа</Text></a>
          </Flexbox>
        </Flexbox>
      </Card>
    </ResetPasswordWrapper>
  );
};

export default PasswordReset;
