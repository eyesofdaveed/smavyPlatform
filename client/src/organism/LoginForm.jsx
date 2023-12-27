import React from 'react';

import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';
import { Card, Flexbox, Input, Text } from '@atoms';
import { sizes } from '@base/index';
import { Button } from '../atoms/Button';

export function LoginForm() {
  const handleSubmitData = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dataToSend = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const data = await baseApi('auth', API_METHODS.POST, dataToSend);

    const setCookie = (name, value, days) => {
      let expires = '';
      if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // setting current day
        expires = '; expires=' + date.toUTCString();
      }
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    };

    setCookie('accessToken', data.accessToken, 7); // Set cookie for 7 days
  };

  const renderForm = () => (
    <>
      <Card width="20%">
        <Flexbox direction="column" gap="8px">
          <form onSubmit={handleSubmitData}>
            <Text fontSize={sizes.xLarge}>Вход</Text>
            <Flexbox direction="column">
              <Input name="email" placeholder="Ваше имя" type="text" required />
              <Input
                name="password"
                placeholder="Ваш пароль"
                type="password"
                required
              />
              <Button type="submit" text="Отправить" />
            </Flexbox>
          </form>
          <Flexbox>
            <Text fontSize={sizes.small}>Забыли пароль?</Text>
            <Text fontSize={sizes.small}>Зарегестрироваться </Text>
          </Flexbox>
        </Flexbox>
      </Card>
    </>
  );
  return renderForm();
}
