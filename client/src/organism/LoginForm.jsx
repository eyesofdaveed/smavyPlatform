import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Card, Flexbox, Input, Text } from '@atoms';
import { colors, sizes } from '@base/index';

import { Button } from '../atoms/Button';
import { authorizeUser } from '../store/authSlice';

export function LoginForm() {
  const dispatch = useDispatch();
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

    dispatch(authorizeUser(formData));
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
            <Flexbox justify="space-between" margin="20px 0 0px">
              <a style={{ fontSize: '12px' }} href="/passwordReset">
                Забыли пароль?
              </a>
              <a style={{ fontSize: '12px' }} href="/registration">
                Зарегестрироватся
              </a>
            </Flexbox>
            <Button
              bgColor={colors.btnPrimary}
              type="submit"
              href="/profile"
              text="Войти"
            />
          </Flexbox>
        </form>
      </Card>
    </>
  );
  return renderForm();
}
