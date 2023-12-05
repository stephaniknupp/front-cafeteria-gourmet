import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./global-styles";
import { Contact } from "./pages/Contact";
import { EditCard } from "./pages/EditCard";
import { Home } from "./pages/Home";
import { Favourites } from "./pages/Favourites";
import { User } from "./pages/User";
import { Login } from "./pages/Login";
import { Compra } from "./pages/Compra";
import { Manager } from "./pages/Manager";
import { RegisterCafeCard } from "./pages/RegisterCafeCard";

function Rotas() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compra/:id" element={<Compra />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/edit/:id" element={<EditCard />} />
        <Route path="/newCafe" element={<RegisterCafeCard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
