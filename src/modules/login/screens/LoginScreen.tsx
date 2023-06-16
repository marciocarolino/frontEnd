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
  return (
    <>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <TitleLogin level={2} type="secondary">
              Login
            </TitleLogin>
            <Input title="Usuário" />
            <Input title="Password" type="password" />
            <Button type="primary" margin="64px 0px 16px 0px">
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage />
      </ContainerLoginScreen>
    </>
  );
};

export default LoginScreen;
