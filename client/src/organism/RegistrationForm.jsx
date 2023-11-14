import React, { useState } from 'react';

import { Card } from '@atoms';
import { Flexbox } from '@atoms';
import { Input } from '@atoms';
import { Text } from '@atoms';
import { sizes } from '@base/index';
import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';
import { Button } from '../atoms/Button';
import { RadioButton } from '../atoms/RadioButton';

const INPUT_TYPES = {
  EMAIL: 'email',
  PASSWORD: 'password',
  NUMBER: 'number',
};

export function RegistrationForm() {
  const [data, setData] = useState();

  const handleSubmitData = async () => {
    const data = await baseApi('users', API_METHODS.GET);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [role, setRole] = useState('student');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = inputName => value => {
    if (inputName === INPUT_TYPES.EMAIL) setEmail(value.trim());
    if (inputName === INPUT_TYPES.PASSWORD) setPassword(value.trim());
    if (inputName === INPUT_TYPES.NUMBER) setNumber(value.trim());
  };

  const renderForm = () => (
    <>
      {data && data.map(item => console.log(item.firstName, '-', item.email))}

      <Card width="30%">
        <Flexbox direction="column" gap="8px" align="flex-start">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmitData();
            }}
          >
            <Flexbox gap="30px">
              <Text fontSize={sizes.xLarge}>Регистрация</Text>
              <Text fontSize={sizes.small}>
                Есть аккаунт? &nbsp; <a href="/login">Войти</a>{' '}
              </Text>
            </Flexbox>
            <Flexbox direction="column">
              <Input
                placeholder="Ваш email"
                onChange={handleChange(INPUT_TYPES.EMAIL)}
                value={email}
                type="email"
                required
              />
              {errorMessage}
              <Input
                placeholder="Ваш пароль"
                onChange={handleChange(INPUT_TYPES.PASSWORD)}
                value={password}
                type="password"
                required
              />
              {errorMessage}
              <Input
                placeholder="Ваш номер"
                onChange={handleChange(INPUT_TYPES.NUMBER)}
                value={number}
                type="tel"
                required
              />
              {errorMessage}
              <Flexbox>
                <RadioButton text="Ученик" role="student" onChange={setRole} />
                <RadioButton text="Учитель" role="teacher" onChange={setRole} />
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
  return isSubmitted ? <>User is successfully logged in</> : renderForm();
}
