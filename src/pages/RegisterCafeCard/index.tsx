import React, { useEffect } from "react";
import { NavBar } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import pixQrCode from "../../assets/pix-qr-code.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/logoBg.svg";
import { ReactComponent as UserLogo } from "../../assets/userLogo.svg";

export function RegisterCafeCard() {
  const navigate = useNavigate();
  const parametros = useParams();

  const [post, setPost] = React.useState([
    {
      _id: "",
      name: "...",
      description: "...",
      stock: 1,
      imgUrl: "shajd",
      price: 0,
      isFavorite: false,
    },
  ]);

  const api = axios.create({
    baseURL: "https://api-cafeteria-gourmet.vercel.app/api",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const [edited, setChanges] = React.useState(true);

  type Cafe = {
    _id: string;
    name: string;
    description: string;
    stock: number;
    imgUrl: string;
    price: number;
    isFavorite: boolean;
  };

  const createCafeCard = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const imgUrl = event.target.imgUrl.value;
    const isFavorite = false;
    const stock = "0";

    const teste = {
      name,
      description,
      price,
      imgUrl,
      isFavorite,
      stock,
    };

    const updated = Object.fromEntries(Object.entries(teste));

    api
      .post(`/post`, {
        ...updated,
      })
      .then((response) => {
        console.log(response);
        window.alert("Café cadastrado com sucesso! Veja no painel");
      })
      .catch((error) => {
        window.alert("Algo deu errado, tente novamente");
        console.log("meu erro: ", error);
      });

    setChanges(edited == true ? false : true);
  };

  useEffect(() => {
    api.get("/getAll").then((response: AxiosResponse<Cafe[]>) => {
      setPost(response.data.filter((v) => v._id === parametros.id));
    });
  }, [edited]);

  return (
    <PageWrapper>
      <NavBarContainer>
        <div>
          <BrandLogo onClick={() => navigate("/manager")} />
        </div>
        <Teste>
          <NavItem onClick={() => navigate("/manager")}>Painel</NavItem>
          <NavItem onClick={() => navigate("/newCafe")}>
            Cadastrar Novo Café
          </NavItem>
        </Teste>
        <UserLogo onClick={() => navigate("/login")} />
      </NavBarContainer>
      <CompraTitle>Cadastrar novo café</CompraTitle>
      <BlockContainer>
        <PaymentSection>
          <form id="CafeCardForm" onSubmit={createCafeCard}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <TextField id="name"></TextField>
              <Layout></Layout>
              <FormLabel>Descrição</FormLabel>
              <TextField id="description"></TextField>
              <Layout></Layout>
              <FormLabel>Preço R$</FormLabel>
              <TextField id="price"></TextField>
              <Layout></Layout>
              <FormLabel>Imagem url</FormLabel>
              <TextField id="imgUrl"></TextField>
              <Button type="submit">Cadastrar</Button>
            </FormControl>
          </form>
        </PaymentSection>
      </BlockContainer>
      <Footer />
    </PageWrapper>
  );
}

const NavBarContainer = styled.header`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  place-items: center;
  position: relative;
  background-color: #3d2923;
`;

const Teste = styled.div`
  width: 100%;
  max-width: 1112px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

const BrandLogo = styled(Logo)`
  width: 311px;
  height: 14rem;
  min-height: 60px;
  margin-top: 2rem;
  margin-right: 6rem;
  margin-left: 8rem;
  padding: 2rem 0;
`;

const NavItem = styled.span`
  font-family: "Inter", sans-serif;"Inter", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 40px;
  color: #bb7654;
`;

const Layout = styled.div`
  margin: 0.5rem;
`;

const PixQrCode = styled.img`
  width: 400px;
  height: 400px;
`;

const BlockContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const PaymentSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;

  > p {
    text-align: left;
    color: #3d2923;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
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

const CompraTitle = styled.h1`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3d2923;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CafeListContainer = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  row-gap: 30px;
`;

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
  /* width: 254px; */
  height: 56px;
  margin: 0.5rem 0 0 1rem;
  font-family: "Inter", sans-serif;'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 43px;

  color: #000000;
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
