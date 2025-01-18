import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import CallToActionSection from "./CallToActionSection";
import { Link } from "react-router-dom";

const PageWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10%;
  background: #ffffff;
  min-height: calc(100vh - 80px);
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    max-width: 500px;
    border-radius: 10px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #28a745;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    line-height: 1.4;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #333333;
  }

  a {
    color: #28a745;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      color: #1e7b34;
    }
  }
`;

const CustomPLMSolutions = () => {
  return (
    <>
      <PageWrapper>
        <ImageContent>
          <img src="/Custom.jpeg" alt="Custom PLM Solutions" />
        </ImageContent>
        <TextContent>
          <h2>CUSTOM PLM SOLUTIONS</h2>
          <h1>Unlock the power of personalized PLM solutions</h1>
          <p>
            Unlock the power of personalized PLM solutions with ISHAARAAS tech
            solutions. We understand that each business is unique, which is why
            we offer customized PLM software that aligns perfectly with your
            organizational goals. Our team of experts works closely with you to
            design and develop solutions that not only meet your current
            requirements but also adapt to your future growth. Enhance
            visibility, streamline processes, and foster collaboration across
            your teams with our bespoke PLM offerings. Let us help you create a
            product lifecycle management system that drives success and
            innovation in your business.
          </p>
          <Link to="/schedule-meeting">Schedule Appointment</Link>
        </TextContent>
      </PageWrapper>
      <CallToActionSection />
    </>
  );
};

export default CustomPLMSolutions;
