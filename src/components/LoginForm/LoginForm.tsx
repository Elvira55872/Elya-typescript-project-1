import Button from "components/Button/Button";
import Input from "components/Input/Input";

import "./styles.css";

function LoginForm() {
  const login = (event:any):void => {
    event.preventDefault();
  };

  return (
    <form className="login-form-container">
      <p className="title">Login form</p>
      <div className="inputs-container">
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
      </div>
      <Button onClick={login} name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;