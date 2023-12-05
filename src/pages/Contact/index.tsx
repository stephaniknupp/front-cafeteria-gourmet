import React from "react";
import { NavBar } from "../../components/Header";
import styled from "styled-components";
import { Footer } from "../../components/Footer";

export function Contact() {
  return (
    <PageWrapper>
      <NavBar />
      <Division>
        <Title>Página de Contato</Title>
        <Text>Nosso whatsapp: (21)9999-9999</Text>
        <Text>Nosso telefone: 2222-2222</Text>
        <Text>Nosso e-mail: contato@Cafeteriagourmet.com.br</Text>
        <Text>
          Nosso endereço: Rua Brizola, Barros Filho, Rio de Janeiro, RJ.
        </Text>
        <Text>CEP: 21660-420</Text>
      </Division>

      <Division>
        <Title>Sobre nós</Title>
        <Text>
          Bem-vindo à nossa Cafeteria gourmet, um refúgio para os amantes de
          café e apreciadores de sabores excepcionais. Aqui, dedicamos nossa
          paixão e expertise na arte de preparar as melhores xícaras de café,
          utilizando grãos cuidadosamente selecionados e técnicas de preparo
          meticulosas. Nossa missão é proporcionar uma experiência única a cada
          cliente que adentra nosso espaço. Cada xícara de café é um convite
          para uma jornada sensorial, onde os aromas envolventes, os sabores
          complexos e a textura delicada se combinam em perfeita harmonia.
          Estamos honrados em compartilhar com você nossa paixão pelo café e
          convidamos você a explorar nossos sabores e vivenciar a magia que está
          por trás de cada xícara. Afinal, nossa Cafeteria gourmet é para
          celebrar a excelência, a arte e o prazer de apreciar uma das bebidas
          mais amadas do mundo.
        </Text>
      </Division>
      <Footer />
    </PageWrapper>
  );
}

const Title = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4rem;
`;

const Text = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 3rem;
`;

const Division = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem;
`;

const PageWrapper = styled.div`
  background-image: url("https://i.imgur.com/lGuFYK4.png");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`;
