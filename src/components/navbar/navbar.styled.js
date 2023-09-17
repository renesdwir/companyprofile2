import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Link as LinkScroll } from "react-scroll";

export const Container = styled.div`
  z-index: 999 !important;
  background-color: white;
  border-bottom: 1px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.08);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;
export const Logo = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
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
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1rem;
      letter-spacing: 2px;
    }
    h1,
    h2 {
      line-height: 1;
    }
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 1024px) {
    z-index: -999;
    display: block;
    position: fixed;
    background-color: white;
    width: 100%;
    left: 0;
    right: 0;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.08);
    padding: 25px 0;
    transition: all 300ms ease;
    transform: ${(props) =>
      props.$isopen ? "translateY(0)" : "translateX(calc(100%))"};
  }
`;
export const Icons = styled(BiMenuAltRight)`
  display: none;
  @media (max-width: 1024px) {
    display: ${(props) => (props.$isopen ? "none" : "block")};
    font-size: 30px;
    cursor: pointer;
  }
`;
export const Icons2 = styled(BiX)`
  display: none;
  @media (max-width: 1024px) {
    display: ${(props) => (props.$isopen ? "block" : "none")};
    font-size: 30px;
    cursor: pointer;
  }
`;
export const Login = styled(Link)`
  padding: 10px 30px;
  border: 1px solid #166bfc;
  color: #166bfc;
  border-radius: 8px;
  transition: all 300ms ease;
  &:hover {
    background-color: #166bfc;
    color: white;
  }
`;
export const StyledLink = styled(LinkScroll)`
  cursor: pointer;
`;
