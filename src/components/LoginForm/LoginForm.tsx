import { MouseEvent } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";

function LoginForm() {
  const login = (event: MouseEvent): void => {
    event.preventDefault();
  };

  return (
    <LoginFormContainer>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputsContainer>
      <Button onClick={login} name="Login" type="submit" />
    </LoginFormContainer>
  );
}
import { format } from "path";

export default LoginForm;
