import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Fixed missing import
import CallToActionSection from "./CallToActionSection";
import Training from "../img/Training.jpeg";

const PageWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10%;
  background: #ffffff;
  min-height: calc(100vh - 80px);
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 5%;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) =>
    props.$isVisible ? "translateX(0)" : "translateX(50px)"};
  transition: transform 0.8s ease;

  img {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${(props) =>
    props.$isVisible ? "translateX(0)" : "translateX(-50px)"};
  transition: transform 0.8s ease;

  h2 {
    color: #28a745;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
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

const PLMTrainingAndSupport = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const section = document.getElementById("plm-training-support");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <PageWrapper id="plm-training-support">
        <ImageContent $isVisible={isVisible}>
          <img src={Training} alt="PLM Training and Support" />
        </ImageContent>
        <TextContent $isVisible={isVisible}>
          <h2>PLM TRAINING AND SUPPORT</h2>
          <h1>Empower your workforce with comprehensive training</h1>
          <p>
            Empower your workforce with ISHAARAAS tech solutions' comprehensive
            PLM training and support services. We believe that effective
            software utilization is key to maximizing the benefits of your PLM
            system. Our training programs are designed to equip your team with
            the necessary skills and knowledge to navigate the software
            confidently. Additionally, our ongoing support ensures that your
            organization remains up-to-date with the latest features and best
            practices. With our dedicated assistance, your team will be
            well-prepared to leverage PLM effectively, leading to improved
            product development processes and enhanced collaboration across
            departments.
          </p>
          <Link to="/schedule-meeting">Schedule Appointment</Link>
        </TextContent>
      </PageWrapper>
      <CallToActionSection />
    </>
  );
};

export default PLMTrainingAndSupport;
