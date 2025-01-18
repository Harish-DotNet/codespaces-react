import React, { useState } from "react";
import styled from "styled-components";

const MobileLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Navbar>
        <Wrapper>
          <Logo>ISHAARAAS TECH SOLUTIONS</Logo>
          <HamburgerMenu onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </HamburgerMenu>
        </Wrapper>
        {menuOpen && (
          <NavLinks>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Services</NavLink>
            <ContactButton>Contact</ContactButton>
          </NavLinks>
        )}
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

export default MobileLayout;

// Styled Components (Tailored for mobile design)
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Navbar = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 0;

  &:hover {
    color: #28a745;
  }
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: #28a745;
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: auto;
  padding: 40px 20px;
`;

const HeroContent = styled.div`
  max-width: 400px;
`;

const HeroTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 15px;
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const HeroButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #218838;
  }
`;
