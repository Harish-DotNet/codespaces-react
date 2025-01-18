import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CallToActionWrapper = styled.div`
  background: #28a745; /* Light green background */
  color: #ffffff;
  text-align: center;
  padding: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  a {
    background: none;
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none; /* Removes underline */

    &:hover {
      background: #ffffff;
      color: #28a745;
    }
  }
`;

const CallToActionSection = () => {
  return (
    <CallToActionWrapper>
      <h2>Let's talk</h2>
      <p>We would love to hear from you!</p>
      <Link to="/#contact">GET IN TOUCH</Link>
    </CallToActionWrapper>
  );
};

export default CallToActionSection;
