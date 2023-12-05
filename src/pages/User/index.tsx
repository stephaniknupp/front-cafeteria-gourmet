import React from "react";
import { NavBar } from "../../components/Header";
import styled from "styled-components";
import { Footer } from "../../components/Footer";

export function User() {
  return (
    <PageWrapper>
      <NavBar />
      <Divisao>
        <LeftSide>
          <h1>Página do Cliente</h1>
          <button>cadastrar cartão</button>
          <button>alterar endereço</button>
        </LeftSide>

        <div>
          <h1>Seu último pedido</h1>
        </div>
      </Divisao>
      <Footer />
    </PageWrapper>
  );
}

const Divisao = styled.div`
  display: flex;
  gap: 12rem;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
