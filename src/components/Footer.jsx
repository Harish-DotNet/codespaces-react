import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background: rgb(2, 81, 36);
  color: #ffffff;
  padding: 1.5rem 10%;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;

    a {
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .rights {
    font-size: 0.75rem;
    color: #d1d1d1;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .links {
      flex-direction: row;
      margin-bottom: 0;
      gap: 2rem;
    }

    .rights {
      margin-top: 0;
      text-align: right;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <div className="links">
        <Link to="/schedule-meeting">Schedule Appointment</Link>
        <Link to="/intake-form">Complete Intake</Link>
      </div>
      <div className="rights">
        © {currentYear} ISHAARAAS Tech Solutions. All rights reserved.
      </div>
    </FooterWrapper>
  );
};

export default Footer;
