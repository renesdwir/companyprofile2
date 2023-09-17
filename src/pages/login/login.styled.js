import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  height: 100vh;
`;
export const ImageContainer = styled.div`
  flex: 5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Logo = styled(Link)`
  margin-top: 50px;
  text-align: center;
  h1,
  h2 {
    line-height: 0.85;
  }
  h1 {
    font-size: 3rem;
    font-weight: bolder;
    background: linear-gradient(to bottom right, #166bfc, #c395e0);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  h2 {
    letter-spacing: 5px;
  }
`;
export const ContentContainer = styled.div`
  background-color: white;
  flex: 2;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #111;
  }
`;
export const Desc = styled.p`
  color: rgb(100 116 139);
`;
export const Input = styled.input`
  padding: 12px;
  color: rgb(100 116 139);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid rgb(226 232 240);
  border-radius: 5px;
  &:focus {
    outline: 0.5px solid #4c1d95;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Button = styled.button`
  padding: 12px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #166bfc;
  cursor: pointer;
  &:hover {
    background-color: #1629fc;
  }
`;
export const Extra = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: rgb(100 116 139);
  a {
    color: rgb(93, 0, 255);
  }
`;
