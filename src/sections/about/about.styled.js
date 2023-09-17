import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 100px auto 0 auto;
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 60px;
  font-size: 30px;
  text-transform: uppercase;
`;
export const AboutWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 20px;
    justify-content: center;
    gap: 20px;
  }
`;
export const Desc = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  p {
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 18px;
    }
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
  @media (max-width: 1024px) {
    img {
      width: 60%;
    }
  }
`;
