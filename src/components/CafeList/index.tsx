import React, { useEffect } from "react";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Logo } from "../../assets/logoBg.svg";
import { ReactComponent as HeartSymbolIcon } from "../../assets/gray-heart.svg";
import { ReactComponent as HeartFilledSymbolIcon } from "../../assets/filled-heart.svg";
import { useNavigate } from "react-router-dom";

export const CafeList = () => {
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

  const addCafeToFavorite = (id: string) => {
    console.log("meu id: ", id);
    api
      .patch(`/update/${id}`, {
        isFavorite: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("meu erro: ", error);
      });

    setFavorites(favorites == true ? false : true);
  };

  const removeCafeToFavorite = (id: string) => {
    api
      .patch(`/update/${id}`, {
        isFavorite: false,
      })
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
    navigate(`/compra/${id}`);
  };

  return (
    <CafeListContainer>
      {post.map((v) => (
        <CafeCardContainer>
          <CafeImg src={v.imgUrl} />
          <TopWrapper>
            <Name>{v.name}</Name>
            {v.isFavorite ? (
              <HeartIconFilled onClick={() => removeCafeToFavorite(v._id)} />
            ) : (
              <HeartIcon onClick={() => addCafeToFavorite(v._id)} />
            )}
          </TopWrapper>
          <Description>{v.description}</Description>
          <BottomWrapper>
            <span>R${v.price},00</span>
            <BuyButton onClick={() => handleClick(v._id)}>
              <span>comprar</span>
            </BuyButton>
          </BottomWrapper>
        </CafeCardContainer>
      ))}
    </CafeListContainer>
  );
};

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
  max-width: 100%;
  display: grid;
  grid: 150px 150px;
  height: 60px;
`;
