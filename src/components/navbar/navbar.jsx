import React, { useState } from "react";
import viteLogo from "/vite.svg";
import {
  Container,
  Links,
  Login,
  Logo,
  Icons,
  Icons2,
  StyledLink,
} from "./navbar.styled";
const links = [
  { id: 1, title: "Home", url: "home" },
  { id: 2, title: "About", url: "about" },
  { id: 3, title: "Pricing", url: "pricing" },
  { id: 4, title: "Contact", url: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Logo href="/">
        <img src={viteLogo} alt="logo" />
        <div>
          <h1>RDATA</h1>
          <h2>CONSULTING</h2>
        </div>
      </Logo>
      <Links $isopen={open}>
        {links.map((link) => (
          <StyledLink
            key={link.id}
            to={link.url}
            spy={true}
            smooth={true}
            duration={500}
            offset={-150}
            onClick={() => setOpen(false)}
          >
            {link.title}
          </StyledLink>
        ))}
        <Login to={"/login"}>Login</Login>
      </Links>
      <Icons $isopen={open} onClick={() => setOpen(true)} />
      <Icons2 $isopen={open} onClick={() => setOpen(false)} />
    </Container>
  );
};

export default Navbar;
