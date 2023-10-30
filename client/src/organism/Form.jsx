import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Card } from '../atoms/Card';
import { Flexbox }from '../atoms/Flexbox';
import { Input } from '../atoms/Input';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { sizes } from '../base/index';
import { baseApi } from '../api';
import { API_METHODS } from '../api/enums';

const INPUT_TYPES = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

const ERROR_MESSAGES = {
  USERNAME: 'Введите имя',
  PASSWORD: 'Введите пароль',
};

export function Form() {
  const [data, setData] = useState();

  const handleSubmitData = async () => {
    const data = await baseApi('users', API_METHODS.GET);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    console.log(username, password);
    event.preventDefault();

    if (!username.length) return setErrorMessage('Введите имя');
    if (!password.length) return setErrorMessage('Введите пароль');
  };

  const handleChange = inputName => value => {
    if (inputName === INPUT_TYPES.USERNAME) setUsername(value.trim());
    if (inputName === INPUT_TYPES.PASSWORD) setPassword(value.trim());
  };

  const renderForm = () => (
    <>
      {data && data.map(item => console.log(item.firstName, '-', item.email))}

      <Card>
        <Flexbox direction="column" gap="8px" align="flex-start">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmitData();
            }}
          >
            <Text fontSize={sizes.xLarge}>Вход</Text>
            <Flexbox direction="column" width="80%">
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
              <input type="submit" />
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

