import React from "react";
import styled from "styled-components";

const DesktopLayout = () => {
  return (
    <Container>
      <Navbar>
        <Wrapper>
          <Logo>ISHAARAAS TECH SOLUTIONS</Logo>
          <NavLinks>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Services</NavLink>
            <ContactButton>Contact</ContactButton>
          </NavLinks>
        </Wrapper>
      </Navbar>
      <HeroSection>
        <Wrapper>
          <HeroContent>
            <HeroTitle>Streamline success</HeroTitle>
            <HeroSubtitle>Unlock the power of PLM solutions</HeroSubtitle>
            <HeroButton>View Services</HeroButton>
          </HeroContent>
        </Wrapper>
      </HeroSection>
    </Container>
  );
};

export default DesktopLayout;

// Styled Components (Same as your earlier desktop styles)
const Container = styled.div`
  /* Same desktop container styles */
`;

const Navbar = styled.div`
  /* Desktop navbar styles */
`;

const Wrapper = styled.div`
  /* Wrapper for desktop */
`;

const Logo = styled.h1`
  /* Logo styles for desktop */
`;

const NavLinks = styled.div`
  /* Horizontal navbar styles for desktop */
`;

const NavLink = styled.a`
  /* NavLink styles */
`;

const ContactButton = styled.button`
  /* Contact button styles */
`;

const HeroSection = styled.div`
  /* Hero section styles for desktop */
`;

const HeroContent = styled.div`
  /* Hero section content styles */
`;

const HeroTitle = styled.h1`
  /* Hero title styles */
`;

const HeroSubtitle = styled.p`
  /* Hero subtitle styles */
`;

const HeroButton = styled.button`
  /* Hero button styles */
`;
