import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import CallToActionSection from "./CallToActionSection";
import { Link } from "react-router-dom";
import Implement from "../img/Implement.jpeg";

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

const PLMImplementation = () => {
  return (
    <>
      <PageWrapper>
        <ImageContent>
          <img src={Implement} alt="PLM Implementation" />
        </ImageContent>
        <TextContent>
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
