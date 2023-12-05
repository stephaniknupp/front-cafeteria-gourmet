import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logoBg.svg";

export const Footer = () => {
  return (
    <FooterBarContainer>
      <div>
        <BrandLogo />
      </div>
    </FooterBarContainer>
  );
};

const FooterBarContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  place-items: center;
  position: relative;
  background-color: #3d2923;
`;

const BrandLogo = styled(Logo)`
  width: 311px;
  height: 14rem;
`;
