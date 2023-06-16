import styled from 'styled-components';

export const ContainerLoginScreen = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const ContainerLogin = styled.div`
  display: flex;
  padding: 22px;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  right: 0;
  top: 0;
  z-index: 2;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LoginImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
`;

// colocando o fundo por enquando com cor
export const BackgroundImage = styled.img`
  background-color: BlueViolet;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;
