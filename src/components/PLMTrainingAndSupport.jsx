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

const PLMTrainingAndSupport = () => {
  return (
    <>
      <PageWrapper>
        <ImageContent>
          <img src="/Training.jpeg" alt="PLM Training and Support" />
        </ImageContent>
        <TextContent>
          <h2>PLM TRAINING AND SUPPORT</h2>
          <h1>Empower your workforce with comprehensive training</h1>
          <p>
            Empower your workforce with ISHAARAAS tech solutions' comprehensive
            PLM training and support services. We believe that effective software
            utilization is key to maximizing the benefits of your PLM system. Our
            training programs are designed to equip your team with the necessary
            skills and knowledge to navigate the software confidently.
            Additionally, our ongoing support ensures that your organization
            remains up-to-date with the latest features and best practices. With
            our dedicated assistance, your team will be well-prepared to leverage
            PLM effectively, leading to improved product development processes
            and enhanced collaboration across departments.
          </p>
          <Link to="/schedule-meeting">Schedule Appointment</Link>
        </TextContent>
      </PageWrapper>
      <CallToActionSection />
    </>
  );
};

export default PLMTrainingAndSupport;
