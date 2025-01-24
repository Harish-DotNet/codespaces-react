import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutImage from "../img/About.jpeg";

const AboutSection = styled.section`
  background: #ffffff;
  padding: 3rem 10%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(50px)"};
  transition: transform 0.8s ease; /* Only slide up */
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 5%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: 2rem;
  transform: ${(props) =>
    props.isVisible ? "translateX(0)" : "translateX(-50px)"};
  transition: transform 0.8s ease;

  h2 {
    color: #28a745;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 3rem;
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
    color: #495057;

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
  transform: ${(props) =>
    props.isVisible ? "translateX(0)" : "translateX(50px)"};
  transition: transform 0.8s ease;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <AboutSection id="about" isVisible={isVisible}>
      <TextContent isVisible={isVisible}>
        <h2>INNOVATIVE IT SOLUTIONS</h2>
        <h1>Transforming product management</h1>
        <p>
          ISHAARAAS tech solutions specializes in providing cutting-edge PLM
          (Product Lifecycle Management) software solutions tailored for
          diverse industries. Our expert team is dedicated to enhancing your
          product management processes. We understand the complexities of
          modern product lifecycles and offer innovative technology that
          streamlines operations, improves collaboration, and drives
          efficiency. Partner with us to unlock your business's full potential.
        </p>
        <a href="#contact">Get in touch</a>
      </TextContent>
      <ImageContent isVisible={isVisible}>
        <img src={AboutImage} alt="Innovative IT Solutions" />
      </ImageContent>
    </AboutSection>
  );
};

export default About;
