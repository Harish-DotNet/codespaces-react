import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background: rgb(2, 81, 36); /* Dark green/black background */
  color: #ffffff;
  padding: 2rem 10%; /* Increased padding for a taller footer */
  text-align: left; /* Align content to the left by default */

  a {
    color: #ffffff;
    margin: 0 1rem 0 0; /* Adjusted margin for spacing between links */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 5%; /* Reduced padding for smaller screens */
    text-align: center; /* Center-align content for phones */

    a {
      display: block; /* Stack links vertically */
      margin: 0.5rem 0; /* Adjust spacing between stacked links */
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Link to="/schedule-meeting">Schedule Appointment</Link>
      <Link to="/intake-form">Complete Intake</Link>
    </FooterWrapper>
  );
};

export default Footer;
