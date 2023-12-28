import React, { useState } from 'react';

import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';
import { Card, Flexbox, Input, Text } from '@atoms';
import { sizes } from '@base/index';
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
      <Card width="20%">
        <Flexbox direction="column" gap="8px">
          <form onSubmit={handleSubmitData}>
            <Text fontSize={sizes.xLarge}>Вход</Text>
            <Flexbox direction="column">
              <Input
                name="email"
                placeholder="Ваше имя"
                type="text"
                required
                onChange={handleChange}
              />
              <Input
                name="password"
                placeholder="Ваш пароль"
                type="password"
                required
                onChange={handleChange}
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
