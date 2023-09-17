import React from "react";
import Hero from "/image1.svg";
import Bg from "/image4.svg";
import {
  Container,
  DescWrapper,
  TitleWrapper,
  ImageContainer,
  Button,
  ElementStyled,
} from "./home.styled";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <ElementStyled name="home">
      <Container>
        <TitleWrapper>
          <h1>
            CUSTOM & MODIFIKASI <br /> Sesuai Kebutuhan Bisnis Anda
          </h1>
        </TitleWrapper>
        <DescWrapper>
          <p>
            Monitor keseluruhan proses bisnis Anda secara real time. Jadwalkan
            demo gratis dan pelajari bagaimana sistem ERP kami dapat tingkatkan
            efisiensi bisnis Anda.
          </p>
          <ImageContainer>
            <img src={Hero} alt="Hero" />
          </ImageContainer>
          <Button>Jadwalkan Demo Gratis</Button>
        </DescWrapper>
      </Container>
    </ElementStyled>
  );
};

export default Home;
