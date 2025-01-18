import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ServicesSection = styled.section`
  background: #f8f9fa; /* Light grey background */
  padding: 4rem 10%;
  min-height: calc(100vh - 80px); /* Ensures the section fits within the viewport minus header height */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the starting point */
  box-sizing: border-box; /* Includes padding in height calculation */

  @media (max-width: 768px) {
    padding: 2rem 5%;
  }
`;

const Title = styled.h2`
  color: #28a745;
  font-size: 1.2rem; /* Smaller font size for title */
  margin-bottom: 0.5rem; /* Closer spacing to heading */
  text-align: left; /* Align to the left */
  text-transform: uppercase; /* Matches the style of the image */
`;

const Heading = styled.h1`
  font-size: 2.2rem; /* Slightly smaller than before */
  margin-bottom: 2.5rem; /* Proper spacing from the title */
  font-weight: bold;
  text-align: left; /* Align to the left */
`;

const ServicesWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start; /* Aligns the cards to the left */
  flex-wrap: wrap; /* Ensures responsiveness */

  @media (max-width: 768px) {
    flex-wrap: nowrap; /* Prevent squeezing into the same row */
    flex-direction: column; /* Stack cards sequentially */
    gap: 1.5rem; /* Reduce gap for better spacing */
  }
`;

const ServiceCard = styled(Link)`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex: 1 1 auto; /* Cards auto-adjust width but maintain proportions */
  max-width: 300px; /* Limits the width of cards */
  text-decoration: none; /* Removes underline for links */
  color: inherit; /* Inherits the text color */
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  &:hover h3 {
    color: #28a745; /* Green color on hover */
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease; /* Smooth transition for image zoom */
  }

  h3 {
    color: #000; /* Default color for headings */
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease; /* Smooth color transition for hover effect */
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #6c757d;
  }

  &:hover img {
    transform: scale(1.05); /* Slight zoom on image hover */
  }
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <Title>INNOVATIVE PLM SOLUTIONS</Title>
      <Heading>Transforming product management for success</Heading>
      <ServicesWrapper>
        <ServiceCard to="/services/plm-implementation">
          <img src="/Implement.jpeg" alt="PLM software implementation" />
          <h3>PLM software implementation →</h3>
          <p>
            Streamline your product lifecycle with our expert PLM implementation services.
          </p>
        </ServiceCard>
        <ServiceCard to="/services/custom-plm-solutions">
          <img src="/Custom.jpeg" alt="Custom PLM solutions" />
          <h3>Custom PLM solutions →</h3>
          <p>
            Get personalized PLM solutions tailored to your specific business needs.
          </p>
        </ServiceCard>
        <ServiceCard to="/services/plm-training-support">
          <img src="/Training.jpeg" alt="PLM training and support" />
          <h3>PLM training and support →</h3>
          <p>
            Empower your team with comprehensive PLM training and ongoing support.
          </p>
        </ServiceCard>
      </ServicesWrapper>
    </ServicesSection>
  );
};

export default Services;
