import React from "react";
import styled from "styled-components";
import { CafeCard } from "../../components/CafeCard";
import { CafeList } from "../../components/CafeList";
import { NavBar } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <div>
      <NavBar />
      <CafeList />
      {/* <h1>Home</h1>
      <span>oi bebeb bebebe be ebb</span> */}
      <Footer />
    </div>
  );
}

const Teste = styled.div`
  display: grid;
`;
