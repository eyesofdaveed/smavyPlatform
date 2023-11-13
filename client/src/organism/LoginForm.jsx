import React, { useState } from 'react';

import { Card } from '@atoms';
import { Flexbox } from '@atoms';
import { Input } from '@atoms';
import { Text } from '@atoms';
import { sizes } from '@base/index';
import { baseApi } from '@api';
import { API_METHODS } from '@api/enums';
import { Button } from '../atoms/Button';

const INPUT_TYPES = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

const ERROR_MESSAGES = {
  USERNAME: 'Введите имя',
  PASSWORD: 'Введите пароль',
};

export function LoginForm() {
  const [data, setData] = useState();

  const handleSubmitData = async () => {
    const data = await baseApi('users', API_METHODS.GET);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = inputName => value => {
    if (inputName === INPUT_TYPES.USERNAME) setUsername(value.trim());
    if (inputName === INPUT_TYPES.PASSWORD) setPassword(value.trim());
  };

  const renderForm = () => (
    <>
      {data && data.map(item => console.log(item.firstName, '-', item.email))}

      <Card width="20%">
        <Flexbox direction="column" gap="8px">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmitData();
            }}
          >
            <Text fontSize={sizes.xLarge}>Вход</Text>
            <Flexbox direction="column">
              <Input
                placeholder="Ваше имя"
                onChange={handleChange(INPUT_TYPES.USERNAME)}
                value={username}
                type="text"
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
  return isSubmitted ? <>User is successfully logged in</> : renderForm();
}
