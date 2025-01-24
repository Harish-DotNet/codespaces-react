import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CallToActionSection from "./CallToActionSection";
import { Link } from "react-router-dom";
import ImplementImage from "../img/Implement.jpeg";

const PageWrapper = styled.section`
  background: #ffffff;
  padding: 3rem 10%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(50px)"};
  transition: transform 0.8s ease; /* Slide up animation */
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

const PLMImplementation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const plmSection = document.getElementById("plm-implementation");
    if (plmSection) observer.observe(plmSection);

    return () => {
      if (plmSection) observer.unobserve(plmSection);
    };
  }, []);

  return (
    <>
      <PageWrapper id="plm-implementation" isVisible={isVisible}>
        <ImageContent isVisible={isVisible}>
          <img src={ImplementImage} alt="PLM Implementation" />
        </ImageContent>
        <TextContent isVisible={isVisible}>
          <h2>PLM SOFTWARE IMPLEMENTATION</h2>
          <h1>Transform your product development process</h1>
          <p>
            Transform your product development process with our tailored PLM
            software implementation services. Our experienced team collaborates
            closely with your organization to understand your unique needs,
            ensuring a seamless integration that enhances efficiency and
            productivity. We guide you through every phase, from initial
            consultation to full implementation, helping you to optimize
            workflows and improve collaboration across departments. With
            ISHAARAAS tech solutions, you will harness the full potential of PLM
            software, empowering your team to make informed decisions and drive
            innovation. Experience a smoother product lifecycle and elevate your
            business performance today.
          </p>
          <Link to="/schedule-meeting">Schedule Appointment</Link>
        </TextContent>
      </PageWrapper>
      <CallToActionSection />
    </>
  );
};

export default PLMImplementation;
