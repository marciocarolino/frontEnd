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
            <LoginImage src="" />
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </>
  );
};

export default LoginScreen;
