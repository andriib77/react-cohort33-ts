import { LoginformWrapper, LoginformName, InputsContainer } from "./styles";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { ChangeEvent, useState } from "react";

function LoginForm() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <LoginformWrapper>
      <LoginformName className="loginform-name">Login form</LoginformName>
      <InputsContainer>
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          type="email"
          value={emailValue}
          onChange={onChangeEmail}
        />
        <Input
          value={passwordValue}
          onChange={onChangePassword}
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
        />
      </InputsContainer>
      <Button name="Login" />
    </LoginformWrapper>
  );
}

export default LoginForm;
