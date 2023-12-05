import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function Login() {
  const navigate = useNavigate();

  return (
    <Teste>
      <LoginWallpaper src="https://i.imgur.com/jDOuVh8.png" />
      <RightSide>
        <Title>Bem vindo a Cafeteria gourmet</Title>
        <div>
          <LoginButton onClick={() => navigate("/")}>
            <span>Sou cliente</span>
          </LoginButton>

          <LoginButtonManager onClick={() => navigate("/manager")}>
            <span>Sou gerente</span>
          </LoginButtonManager>
        </div>
      </RightSide>
    </Teste>
  );
}

const LoginButtonManager = styled.button`
  width: 202px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 20px;
  font-size: 20px;
  margin-right: 2rem;

  > span {
    color: #3d2923;
    font-family: "Inter", sans-serif;inter;
  }
`;

const LoginButton = styled.button`
  width: 202px;
  height: 40px;
  background: #3d2923;
  border: 1px solid #3d2923;
  border-radius: 20px;
  font-size: 20px;
  margin-right: 2rem;

  > span {
    color: #ffffff;
    font-family: "Inter", sans-serif;inter;
  }
`;

const Teste = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100vh;
`;

const LoginWallpaper = styled.img`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  background-image: url("https://i.imgur.com/jDOuVh8.png");
  background-size: cover;
  background-position: center;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  margin-left: 1rem;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3d2923;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4rem;
`;
