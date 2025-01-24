import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Training from "../img/Training.jpeg";
import Custom from "../img/Custom.jpeg";
import Implement from "../img/Implement.jpeg";

const ServicesSection = styled.section`
  background: #f8f9fa;
  padding: 4rem 10%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 5%;
  }
`;

const Title = styled.h2`
  color: #28a745;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
  text-transform: uppercase;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) => (props.visible ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.8s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
  font-weight: bold;
  text-align: left;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) => (props.visible ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.8s ease-in-out;
`;

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Divides into three equal columns */
  gap: 2rem;
  width: 100%; /* Ensures it spans the entire section width */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack items on smaller screens */
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(Link)`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s, box-shadow 0.3s, opacity 0.8s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition-delay: ${(props) => props.delay || "0s"}; /* Staggered animation */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  &:hover h3 {
    color: #28a745;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const section = document.getElementById("services");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (location.hash === "#services") {
      setIsVisible(true);
    }
  }, [location]);

  return (
    <ServicesSection id="services">
      <Title visible={isVisible}>INNOVATIVE PLM SOLUTIONS</Title>
      <Heading visible={isVisible}>
        Transforming product management for success
      </Heading>
      <ServicesWrapper>
        <ServiceCard to="/services/plm-implementation" visible={isVisible} delay="0s">
          <img src={Implement} alt="PLM software implementation" />
          <h3>PLM software implementation →</h3>
          <p>
            Streamline your product lifecycle with our expert PLM implementation
            services.
          </p>
        </ServiceCard>
        <ServiceCard to="/services/custom-plm-solutions" visible={isVisible} delay="0.2s">
          <img src={Custom} alt="Custom PLM solutions" />
          <h3>Custom PLM solutions →</h3>
          <p>
            Get personalized PLM solutions tailored to your specific business
            needs.
          </p>
        </ServiceCard>
        <ServiceCard to="/services/plm-training-support" visible={isVisible} delay="0.4s">
          <img src={Training} alt="PLM training and support" />
          <h3>PLM training and support →</h3>
          <p>
            Empower your team with comprehensive PLM training and ongoing
            support.
          </p>
        </ServiceCard>
      </ServicesWrapper>
    </ServicesSection>
  );
};

export default Services;
