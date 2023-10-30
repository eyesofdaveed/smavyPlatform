import React, { useState } from 'react';

import Card from '../atoms/Card';
import Flexbox from '../atoms/Flexbox';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import { sizes } from '../base/index';
import { Label } from '../atoms/Label';

const INPUT_TYPES = {
  USEREMAIL: 'useremail',
  PASSWORD: 'password',
  USERNUMBER: 'usernumber',
};

function RegistrationForm() {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [usernumber, setUserenumber] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    console.log(usernumber);
    event.preventDefault();

    if (!useremail.length) return setErrorMessage('Введите email');
    if (!password.length) return setErrorMessage('Введите пароль');
    if (!usernumber.length) return setErrorMessage('Введите номер');
  };

  const handleChange = inputName => value => {
    if (inputName === INPUT_TYPES.USEREMAIL) setUseremail(value.trim());
    if (inputName === INPUT_TYPES.PASSWORD) setPassword(value.trim());
    if (inputName === INPUT_TYPES.USERNUMBER) setUserenumber(value.trim());
  };

  const renderForm = () => (
    <Card width="30%">
      <Flexbox direction="column" gap="8px" align="flex-start">
        <Flexbox>
          <Text fontSize={sizes.xLarge}>Регистрация</Text>
          <Flexbox>
            <Text fontSize={sizes.small}>Забыли пароль?</Text>
            <Text fontSize={sizes.small}>Зарегестрироваться </Text>
          </Flexbox>
        </Flexbox>
        <Flexbox direction="column" width="80%">
          <Input
            placeholder="Ваш e-mail"
            onChange={handleChange(INPUT_TYPES.USEREMAIL)}
            value={useremail}
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
            placeholder="Ваш телефон"
            onChange={handleChange(INPUT_TYPES.USERNUMBER)}
            value={usernumber}
            type="number"
            required
          />
          {errorMessage}
          <Flexbox>
            <Label text="Учитель" role="teacher" onChange={setRole}></Label>
            <Label text="Ученик" role="student" onChange={setRole}></Label>
          </Flexbox>
          <Button type="submit" text="Продолжить" onClick={handleSubmit} />
        </Flexbox>
        <Text fontSize={sizes.small}>
          Нажимая кнопку "Продолжить", Вы <br /> принимаете условия &nbsp;
          <a href="#">Публичной оферты</a>
        </Text>
      </Flexbox>
    </Card>
  );

  return isSubmitted ? <>User is successfully logged in</> : renderForm();
}

export default RegistrationForm;
