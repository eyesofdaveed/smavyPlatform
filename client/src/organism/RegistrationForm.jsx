import React, { useCallback, useState } from 'react';

import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';
import { Flexbox, Input, Text } from '@atoms';
import { colors, sizes } from '@base/index';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';

export function RegistrationForm() {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: role,
  });

  // optimise with callback
  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    setTimeout(function (e) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }, 1000);
  });

  const handleSubmitData = async event => {
    event.preventDefault();

    try {
      const data = await baseApi('register', API_METHODS.POST, formData);
      document.cookie = `accessToken = ${data.accessToken}`; // set cookie
    } catch (err) {
      console.log(err);
    }

    const response = await baseApi('register', API_METHODS.POST, dataToSend);
    console.log(response);
  };

  const renderForm = () => (
    <>
      <Card width="30%">
        <form onSubmit={handleSubmitData}>
          <Flexbox direction="column" gap="8px" align="center">
            <Flexbox
              gap="30px"
              justify="space-between"
              width="90%"
              margin="10px"
            >
              <Text fontSize={sizes.xLarge}>Регистрация</Text>
              <Text fontSize={sizes.small}>
                Есть аккаунт? &nbsp; <a href="/login">Войти</a>{' '}
              </Text>
            </Flexbox>
            <Flexbox direction="column" width="90%">
              <Input
                name="email"
                placeholder="Ваш email"
                type="email"
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
              <Input
                name="firstName"
                placeholder="Имя"
                required
                onChange={handleChange}
              />
              <Input
                name="lastName"
                placeholder="Фамилия"
                required
                onChange={handleChange}
              />
              <Button
                bgColor={colors.btnPrimary}
                type="submit"
                text="Продолжить"
              />
            </Flexbox>
            <Flexbox>
              <Text fontSize={sizes.small}>
                Нажимая кнопку "Продолжить", Вы <br /> принимаете условия{' '}
                <a href="/">Публичной оферты</a>
              </Text>
            </Flexbox>
          </Flexbox>
        </form>
      </Card>
    </>
  );
  return renderForm();
}
