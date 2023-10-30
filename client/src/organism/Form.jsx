import React, { useState } from 'react';

import Card from '../atoms/Card';
import Flexbox from '../atoms/Flexbox';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { sizes } from '../base/index';
import { Label } from '../atoms/Label';

const INPUT_TYPES = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

const ERROR_MESSAGES = {
  USERNAME: 'Введите имя',
  PASSWORD: 'Введите пароль',
};

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    console.log(role);
    event.preventDefault();

    if (!username.length) return setErrorMessage('Введите имя');
    if (!password.length) return setErrorMessage('Введите пароль');
  };

  const handleChange = inputName => value => {
    if (inputName === INPUT_TYPES.USERNAME) setUsername(value.trim());
    if (inputName === INPUT_TYPES.PASSWORD) setPassword(value.trim());
  };

  const renderForm = () => (
    <Card>
      <Flexbox direction="column" gap="8px" align="flex-start">
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
          <Flexbox>
            <Label text="Учитель" role="teacher" onChange={setRole}></Label>
            <Label text="Ученик" role="student" onChange={setRole}></Label>
          </Flexbox>
          <Button type="submit" text="Войти" onClick={handleSubmit} />
        </Flexbox>
        <Flexbox>
          <Text fontSize={sizes.small}>Забыли пароль?</Text>
          <Text fontSize={sizes.small}>Зарегестрироваться </Text>
        </Flexbox>
      </Flexbox>
    </Card>
  );

  return isSubmitted ? <>User is successfully logged in</> : renderForm();
}

export default Form;
