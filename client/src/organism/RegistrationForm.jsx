import React, { useState } from 'react';

import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';
import { Flexbox, Input, Text } from '@atoms';
import { sizes } from '@base/index';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';
import { RadioButton } from '../atoms/RadioButton';

export function RegistrationForm() {
  const [role, setRole] = useState('student');

  const handleSubmitData = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dataToSend = {
      email: formData.get('email'),
      password: formData.get('password'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      role: role,
    };

    const response = await baseApi('register', API_METHODS.POST, dataToSend);
    console.log(response);
  };

  const renderForm = () => (
    <>
      <Card width="30%">
        <Flexbox direction="column" gap="8px" align="flex-start">
          <form onSubmit={handleSubmitData}>
            <Flexbox gap="30px">
              <Text fontSize={sizes.xLarge}>Регистрация</Text>
              <Text fontSize={sizes.small}>
                Есть аккаунт? &nbsp; <a href="/login">Войти</a>{' '}
              </Text>
            </Flexbox>
            <Flexbox direction="column">
              <Input
                name="email"
                placeholder="Ваш email"
                type="email"
                required
              />
              <Input
                name="password"
                placeholder="Ваш пароль"
                type="password"
                required
              />
              <Input
                name="firstName"
                placeholder="Ваш номер"
                type="tel"
                required
              />
              <Input
                name="lastName"
                placeholder="Ваш номер"
                type="tel"
                required
              />
              <Flexbox>
                <RadioButton
                  text="Ученик"
                  role="student"
                  value={role}
                  onChange={() => setRole('student')}
                />
                <RadioButton
                  text="Учитель"
                  role="teacher"
                  value={role}
                  onChange={() => setRole('teacher')}
                />
              </Flexbox>
              <Button type="submit" text="Продолжить" />
            </Flexbox>
          </form>
          <Flexbox>
            <Text fontSize={sizes.small}>
              Нажимая кнопку "Продолжить", Вы <br /> принимаете условия{' '}
              <a href="/">Публичной оферты</a>
            </Text>
          </Flexbox>
        </Flexbox>
      </Card>
    </>
  );
  return renderForm();
}
