import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LoginImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <Input title="Usuário" />
            <Input title="Password" type="password" />
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage />
      </ContainerLoginScreen>
    </>
  );
};

export default LoginScreen;
