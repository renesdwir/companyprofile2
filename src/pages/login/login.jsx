import React from "react";
import viteLogo from "/vite.svg";
import {
  Button,
  Container,
  ContentContainer,
  Desc,
  Extra,
  Form,
  ImageContainer,
  Input,
  Logo,
} from "./login.styled";

const Login = () => {
  return (
    <Container>
      <ImageContainer>
        <img
          src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
      </ImageContainer>
      <ContentContainer>
        <Logo to={"/"}>
          <img src={viteLogo} alt="" />
          <h1>RDATA</h1>
          <h2>CONSULTING</h2>
        </Logo>
        <Desc>Selamat datang kembali! kembangi bisnismu</Desc>
        <Form action="">
          <p>Alamat Email</p>
          <Input type="text" placeholder="Masukkan Email" />
          <p>Password</p>
          <Input type="password" placeholder="Masukkan Password" />
        </Form>
        <Button>Masuk ke Akun</Button>
        <Extra>
          <p>
            Belum memiliki akun? Daftar <a href="#">disini</a>
          </p>
          <p>
            Lupa password? Klik <a href="#">disini</a>
          </p>
        </Extra>
      </ContentContainer>
    </Container>
  );
};

export default Login;
