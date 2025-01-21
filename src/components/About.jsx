import React from 'react';
import styled from 'styled-components';
import AboutImage from "../img/About.jpeg";

const AboutSection = styled.section`
  background: #ffffff; /* Add a distinct background color */
  padding: 3rem 10%; /* Increased padding for a sleek look */
  min-height: calc(100vh - 80px); /* Ensures the section fits within the viewport minus header height */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box; /* Includes padding in height calculation */

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 5%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: 2rem;

  h2 {
    color: #28a745;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px; /* Sleek letter spacing */
  }

  h1 {
    font-size: 3rem; /* Larger font size for better emphasis */
    margin-bottom: 1.5rem;
    font-weight: bold;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #495057; /* Subtle text color for readability */

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  a {
    color: #28a745;
    text-decoration: underline;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #1e7b34;
    }
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px; /* Restrict maximum image width */
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sleek shadow for emphasis */

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <TextContent>
        <h2>INNOVATIVE IT SOLUTIONS</h2>
        <h1>Transforming product management</h1>
        <p>
          ISHAARAAS tech solutions specializes in providing cutting-edge PLM
          (Product Lifecycle Management) software solutions tailored for
          diverse industries. Based in Auckland, NZ, our expert team is
          dedicated to enhancing your product management processes. We
          understand the complexities of modern product lifecycles and offer
          innovative technology that streamlines operations, improves
          collaboration, and drives efficiency. Partner with us to unlock your
          business's full potential.
        </p>
        <a href="#contact">Get in touch</a>
      </TextContent>
      <ImageContent>
        <img src={AboutImage} alt="Innovative IT Solutions" />
      </ImageContent>
    </AboutSection>
  );
};

export default About;
