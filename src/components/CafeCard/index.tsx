import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logoBg.svg";
import { ReactComponent as HeartSymbolIcon } from "../../assets/gray-heart.svg";

export const CafeCard = () => {
  return (
    <CafeCardContainer>
      <CafeImg src={"https://i.imgur.com/4S4wvk9.png"} />
      <TopWrapper>
        <Name>Café Expresso</Name>
        <HeartIcon />
      </TopWrapper>
      <Description>
        O pretinho básico que amamos, nosso café expresso é uma bebida intensa,
        encorpada e repleta de aroma.
      </Description>
      <BottomWrapper>
        <span>R$5,00</span>
        <BuyButton>
          <span>comprar</span>
        </BuyButton>
      </BottomWrapper>
    </CafeCardContainer>
  );
};

const CafeCardContainer = styled.div`
  width: 451px;
  height: 615px;
  padding: 1rem;
  background: #ffffff;
  border-radius: 70px;
`;

const CafeImg = styled.img`
  width: 419px;
  height: 358px;
  left: 34px;
  top: 351px;

  background: url(image.png);
  border-radius: 52px;
`;

const Name = styled.h2`
  width: 254px;
  height: 56px;
  margin: 0.5rem 0 0 1rem;
  font-family: "Inter", sans-serif;'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 43px;

  color: #000000;
`;

const HeartIcon = styled(HeartSymbolIcon)`
  margin-top: -595px;
  margin-left: -10px;
  scale: 0.08;
`;

const Description = styled.p`
  width: 409px;
  height: 100px;
  margin: 0.5rem 0 0 1rem;
  font-family: "Inter", sans-serif;'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
`;

const BottomWrapper = styled.div`
  margin: 0 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 24px;
    margin-right: 1.2rem;
  }
`;

const BuyButton = styled.button`
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

const Stock = styled.span`
  width: 60px;
  height: 30px;

  font-family: "Inter", sans-serif;'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
`;

const TopWrapper = styled.div`
  display: grid;
  grid: 150px 150px;
  height: 60px;
`;
