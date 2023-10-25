import React, { useState } from "react";

import Card from "../atoms/Card";
import Flexbox from "../atoms/Flexbox";
import Input from "../atoms/Input";
import Text from "../atoms/Text";
import { sizes } from '../base/index';

function Form() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const database = [
    {
      username: "",
      password: ""
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      debugger;
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const onChange = () => {
    let { uname, pass } = document.forms[0];
    database[0].username += uname.value;
    database[0].password += pass.value;
  }

  const renderForm = (

    <Card>
      <Flexbox direction="column" gap="8px" align="flex-start">
        <form onSubmit={handleSubmit}>
          <Text fontSize={sizes.xLarge}>Вход</Text>


          <Flexbox direction="column">
            <Input placeholder="Ваше имя" onChange={onChange} value={database[0].username} type="text" name="uname" required />
            {renderErrorMessage("uname")}
            <Input placeholder="Ваш пароль" onChange={onChange} value={database[0].password} type="password" name="pass" required />
            {renderErrorMessage("pass")}
            <Input type="submit" />

          </Flexbox>

          <Flexbox>
            <Text fontSize={sizes.small}>Забыли пароль?</Text>
            <Text fontSize={sizes.small}>Зарегестрироваться </Text>
          </Flexbox>
        </form>
      </Flexbox >
    </Card >

  );

  return (
    <>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </>
  );
}

export default Form;