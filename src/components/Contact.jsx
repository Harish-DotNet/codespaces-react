import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 2rem 5%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3rem 10%;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const Title = styled.h2`
  color: #28a745;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  label {
    font-size: 0.9rem;
    color: #6c757d;
    line-height: 1.5;
  }

  input {
    margin-top: 0.2rem;
  }
`;

const SubmitButton = styled.button`
  background: #28a745;
  color: #ffffff;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #1e7b34;
  }
`;

const MapWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border: none;

  @media (min-width: 768px) {
    height: 300px;
  }
`;

const ContactDetails = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
  }

  a {
    color: #28a745;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <FormWrapper>
        <Title>GET IN TOUCH</Title>
        <Heading>We’re here to help your business thrive.</Heading>
        <Form>
          <Input type="text" placeholder="Name *" required />
          <Input type="email" placeholder="Email address *" required />
          <Input type="tel" placeholder="Phone number *" required />
          <TextArea placeholder="Message" rows="4" />
          <CheckboxWrapper>
            <input type="checkbox" required />
            <label>
              I allow this website to store my submission so they can respond to
              my inquiry. *
            </label>
          </CheckboxWrapper>
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </Form>
      </FormWrapper>

      <MapWrapper>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7988122762966!2d80.19472587629865!3d12.928936116021844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525da0ed76d7eb%3A0xbdf43022f31dd76b!2sAlliance%20Galleria%20Residences!5e0!3m2!1sen!2sin!4v1671288332337!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></Map>
        <ContactDetails>
          <h3>Get in touch</h3>
          <p>
            <a href="mailto:harishusasep4@gmail.com">harishusasep4@gmail.com</a>
          </p>
          <h3>Location</h3>
          <p>
            Magnus C 1302, Alliance Galleria, Pallavaram
            <br />
            Chennai, TN INDIA
          </p>
        </ContactDetails>
      </MapWrapper>
    </ContactSection>
  );
};

export default Contact;
