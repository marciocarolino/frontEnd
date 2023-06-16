import { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LoginImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username, setUSerName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUSerName(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`${username}, ${password}`);
  };

  return (
    <>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <TitleLogin level={2} type="secondary">
              Login
            </TitleLogin>
            <Input
              title="Usuário"
              margin="32px 0px 0px"
              onChange={handleUserName}
              value={username}
            />
            <Input
              title="Password"
              type="password"
              margin="32px 0px 0px"
              onChange={handlePassword}
              value={password}
            />
            <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
      </ContainerLoginScreen>
      <BackgroundImage />
    </>
  );
};

export default LoginScreen;
