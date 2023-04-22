import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>The Daily Chow</Logo>
      </Nav>
      <SiCodechef />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 3rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 3rem;
  }
`;
export default Header;
