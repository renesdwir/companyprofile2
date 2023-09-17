import { Element } from "react-scroll";
import styled from "styled-components";
export const ElementStyled = styled(Element)`
  background-image: url("./image4.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Container = styled.div`
  max-width: 1024px;
  margin: 100px auto 0 auto;
`;
export const TitleWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: row-reverse;
  h1 {
    line-height: 0.8;
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    color: #111111;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    h1 {
      font-size: 30px;
    }
  }
`;

export const DescWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 30px;
  p {
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    padding: 0 20px;
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  width: 200px;
  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: max-content;
  padding: 10px 30px;
  border: 1px solid #166bfc;
  color: #166bfc;
  border-radius: 8px;
  transition: all 300ms ease;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: #166bfc;
    color: white;
  }
`;
