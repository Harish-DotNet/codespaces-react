import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroWrapper = styled.section`
  background: url("/IshaaraasLandingPage.jpeg") no-repeat center center/cover;
  height: 80vh;
  display: flex;
  align-items: center;
  padding: 0 10%; /* Matches header padding */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 0 1.5rem; /* Match header padding for phone screens */
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: #ffffff;
  text-align: left;
  max-width: 600px;
  animation: ${fadeInUp} 1.2s ease-in-out;

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on smaller screens */
  }
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background: #28a745;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #218838;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const Hero = () => {
  const handleViewServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroWrapper>
      <HeroContent>
        <Heading>Streamline success</Heading>
        <Subheading>Unlock the power of PLM solutions</Subheading>
        <Button onClick={handleViewServices}>View Services</Button>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
