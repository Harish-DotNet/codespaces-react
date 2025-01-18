import React, { useState } from "react";
import styled from "styled-components";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Navbar>
        <Wrapper>
          <Logo>ISHAARAAS TECH SOLUTIONS</Logo>
          <DesktopNavLinks>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Services</NavLink>
            <ContactButton>Contact</ContactButton>
          </DesktopNavLinks>
          <HamburgerMenu onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </HamburgerMenu>
        </Wrapper>
        <MobileNavLinks menuOpen={menuOpen}>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Services</NavLink>
          <ContactButton>Contact</ContactButton>
        </MobileNavLinks>
      </Navbar>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Streamline success</HeroTitle>
          <HeroSubtitle>Unlock the power of PLM solutions</HeroSubtitle>
          <HeroButton>View Services</HeroButton>
        </HeroContent>
      </HeroSection>
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Navbar = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Desktop Navigation Links
const DesktopNavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Hide desktop nav links on mobile */
  }
`;

// Mobile Navigation Links
const MobileNavLinks = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;

  @media (min-width: 768px) {
    display: none; /* Hide mobile nav links on desktop */
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 0;

  &:hover {
    color: #28a745;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #28a745;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
    text-align: center;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("/IshaaraasLandingPage.jpeg");
  background-size: cover;
  background-position: center;
  text-align: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  color: #fff;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeroButton = styled.button`
  padding: 12px 24px;
  background-color: #28a745;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;
