import React from "react";
import ContactImg from "/image3.svg";
import {
  Container,
  Title,
  ContactWrapper,
  Desc,
  ImageContainer,
  Form,
  StyledInput,
  StyledTextArea,
  Button,
} from "./contact.styled";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <Container>
        <Title>Hubungi Kami</Title>
        <ContactWrapper>
          <Desc>
            <Form>
              <StyledInput type="text" placeholder="name" />
              <StyledInput type="text" placeholder="email" />
              <StyledTextArea
                placeholder="message"
                cols="30"
                rows="5"
              ></StyledTextArea>
              <Button>Kirim E-mail</Button>
            </Form>
          </Desc>
          <ImageContainer>
            <img src={ContactImg} alt="contact-img" />
          </ImageContainer>
        </ContactWrapper>
      </Container>
    </Element>
  );
};

export default Contact;
