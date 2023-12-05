import React, { useEffect } from "react";
import styled from "styled-components";
import { CafeCard } from "../../components/CafeCard";
import { CafeList } from "../../components/CafeList";
import { NavBar } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ReactComponent as UserLogo } from "../../assets/userLogo.svg";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Logo } from "../../assets/logoBg.svg";
import { ReactComponent as HeartSymbolIcon } from "../../assets/gray-heart.svg";
import { ReactComponent as HeartFilledSymbolIcon } from "../../assets/filled-heart.svg";
import { useNavigate } from "react-router-dom";

export function Manager() {
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
    {
      _id: "",
      name: "...",
      description: "...",
      stock: 1,
      imgUrl: "shajd",
      price: 0,
      isFavorite: false,
    },
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

  const [favorites, setFavorites] = React.useState(true);

  const api = axios.create({
    baseURL: "https://api-cafeteria-gourmet.vercel.app/api",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  type Cafe = {
    _id: string;
    name: string;
    description: string;
    stock: number;
    imgUrl: string;
    price: number;
    isFavorite: boolean;
  };

  useEffect(() => {
    api.get("/getAll").then((response: AxiosResponse<Cafe[]>) => {
      setPost(response.data);
    });
  }, [favorites]);

  const deleteCafe = (id: string) => {
    api
      .delete(`/delete/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("meu erro: ", error);
      });

    setFavorites(favorites == true ? false : true);
  };

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
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
      <FavouritesTitle>Painel administrativo </FavouritesTitle>
      <CafeListContainer>
        {post.map((v) => (
          <CafeCardContainer>
            <CafeImg src={v.imgUrl} />
            <TopWrapper>
              <Name>{v.name}</Name>
            </TopWrapper>
            <Description>{v.description}</Description>
            <BottomWrapper>
              <span>R${v.price},00</span>
            </BottomWrapper>
            <ButtonsWrapper>
              <DeleteButton onClick={() => deleteCafe(v._id)}>
                <span>deletar</span>
              </DeleteButton>
              <EditButton onClick={() => handleClick(v._id)}>
                <span>editar</span>
              </EditButton>
            </ButtonsWrapper>
          </CafeCardContainer>
        ))}
      </CafeListContainer>
      <Footer />
    </div>
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

const FavouritesTitle = styled.h1`
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
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
  height: 645px;
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
  position: absolute;
  margin-top: -525px;
  margin-left: -10px;
  scale: 0.08;
`;

const HeartIconFilled = styled(HeartFilledSymbolIcon)`
  position: absolute;
  margin-top: -525px;
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

const DeleteButton = styled.button`
  width: 202px;
  height: 40px;
  margin-top: 0.5rem;
  background: #910202e8;
  border: 1px solid #910202e8;
  border-radius: 20px;
  font-size: 20px;
  margin-right: 2rem;

  > span {
    color: #ffffff;
    font-family: "Inter", sans-serif;inter;
  }
`;

const EditButton = styled.button`
  width: 202px;
  height: 40px;
  margin-top: 0.5rem;
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
  max-width: 100%;
  display: grid;
  grid: 150px 150px;
  height: 60px;
`;
