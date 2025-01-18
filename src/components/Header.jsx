import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 10%;

  @media (max-width: 768px) {
    padding: 1rem 5%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 60px;
    right: 5%;
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1rem;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #28a745;
  }
`;

const ContactButton = styled.button`
  background: #28a745;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #1e7b34;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background: #000000;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        const offsetPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerHeight = document.querySelector("header")?.offsetHeight || 0;
          const offsetPosition = element.offsetTop - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  };

  return (
    <HeaderWrapper>
      <Nav>
        <Logo>ISHARAAS TECH SOLUTIONS</Logo>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        <NavLinks open={menuOpen}>
          <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
          <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
          <NavLink onClick={() => scrollToSection("services")}>Services</NavLink>
          <ContactButton onClick={() => scrollToSection("contact")}>Contact</ContactButton>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
