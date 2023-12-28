import React, { useState } from 'react';

import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';
import { Card, Flexbox, Input, Text } from '@atoms';
import { colors, sizes } from '@base/index';
import { Button } from '../atoms/Button';

export function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitData = async event => {
    event.preventDefault();

    try {
      const data = await baseApi('auth', API_METHODS.POST, formData);
      document.cookie = `accessToken = ${data.accessToken}`; // set cookie
    } catch (err) {
      console.log(err);
    }
  };

  const renderForm = () => (
    <>
      <Card width="400px">
        <form onSubmit={handleSubmitData}>
          <Flexbox direction="column" gap="10px" width="95%" padding="10px">
            <Text fontSize={sizes.xLarge}>Вход</Text>
            <Flexbox direction="column" width="100%">
              <Input
                width="95%"
                name="email"
                placeholder="Ваше имя"
                type="text"
                required
                onChange={handleChange}
              />
              <Input
                width="95%"
                name="password"
                placeholder="Ваш пароль"
                type="password"
                required
                onChange={handleChange}
              />
            </Flexbox>
            <Flexbox justify="space-between">
              <a style={{ textDecoration: 'none' }} href="/passwordReset">
                <Text fontSize={sizes.small}>Забыли пароль?</Text>
              </a>
              <a style={{ textDecoration: 'none' }} href="/registration">
                <Text fontSize={sizes.small}>Зарегестрироватся</Text>
              </a>
            </Flexbox>
            <Button
              bgColor={colors.btnPrimary}
              type="submit"
              text="Отправить"
            />
          </Flexbox>
        </form>
      </Card>
    </>
  );
  return renderForm();
}
