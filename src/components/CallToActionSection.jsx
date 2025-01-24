import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CallToActionWrapper = styled.div`
  background: #28a745; /* Light green background */
  color: #ffffff;
  padding: 2rem 10%; /* Matches padding with header and footer */
  text-align: left; /* Align content to the left */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 5%; /* Adjust for smaller screens */
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  button {
    background: none;
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: #ffffff;
      color: #28a745;
    }
  }
`;

const CallToActionSection = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/#contact");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const offsetPosition =
          contactSection.offsetTop - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300); // Small delay to allow navigation
  };

  return (
    <CallToActionWrapper>
      <h2>Let's talk</h2>
      <p>We would love to hear from you!</p>
      <button onClick={handleNavigateToContact}>GET IN TOUCH</button>
    </CallToActionWrapper>
  );
};

export default CallToActionSection;
