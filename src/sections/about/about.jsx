import React from "react";
import Hero from "/image2.svg";
import { Element } from "react-scroll";

import {
  Container,
  ImageContainer,
  AboutWrapper,
  Desc,
  Title,
} from "./about.styled";

const About = () => {
  return (
    <Element name="about">
      <Container>
        <Title>Tentang Kami</Title>
        <AboutWrapper>
          <Desc>
            <p>
              <b>PT. RDATA CONSULTING</b> didirikan pada tahun 2023, RDATA
              CONSULTING berbasis di Jakarta perusahaan teknologi yang
              mengkhususkan diri dalam Software ERP dan Solusi TI .
            </p>
          </Desc>
          <ImageContainer>
            <img src={Hero} alt="about-img" />
          </ImageContainer>
        </AboutWrapper>
      </Container>
    </Element>
  );
};

export default About;
