import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  background: #f4f6f8;
  padding: 2rem;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem 2.5rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: #28a745;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    color: #495057;
  }

  input,
  select {
    width: 100%;
    max-width: 400px;
    padding: 0.8rem;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 1rem;
    background: #f8f9fa;
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border: 1px solid #28a745;
      box-shadow: 0 0 5px rgba(40, 167, 69, 0.2);
      outline: none;
    }
  }

  textarea {
    width: 100%;
    min-height: 120px;
    padding: 0.8rem;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 1rem;
    background: #f8f9fa;
    resize: vertical;
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border: 1px solid #28a745;
      box-shadow: 0 0 5px rgba(40, 167, 69, 0.2);
      outline: none;
    }
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
    cursor: pointer;

    input {
      width: 18px;
      height: 18px;
    }
  }
`;

const SubmitButton = styled.button`
  background: #28a745;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
  transition: background 0.3s, box-shadow 0.3s;

  &:hover {
    background: #218838;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.2);
  }
`;

const CompleteIntakeForm = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <Title>Intake Form</Title>
        <Heading>Help us serve you better</Heading>
        <Form>
          {/* Name */}
          <InputField>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" placeholder="Jane Smith" required />
          </InputField>

          {/* Email */}
          <InputField>
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              placeholder="email@website.com"
              required
            />
          </InputField>

          {/* Industry */}
          <InputField>
            <label htmlFor="industry">
              What industry does your company operate in?
            </label>
            <select id="industry" required>
              <option value="">Select</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="automotive">Automotive</option>
              <option value="electronics">Electronics</option>
              <option value="aerospace">Aerospace</option>
              <option value="other">Other</option>
            </select>
          </InputField>

          {/* Specific PLM Solutions */}
          <InputField>
            <label>What specific PLM solutions are you interested in?</label>
            <CheckboxGroup>
              <label>
                <input type="checkbox" value="Product Data Management" />
                Product Data Management
              </label>
              <label>
                <input type="checkbox" value="Workflow Management" />
                Workflow Management
              </label>
              <label>
                <input type="checkbox" value="Change Management" />
                Change Management
              </label>
              <label>
                <input type="checkbox" value="Collaboration Tools" />
                Collaboration Tools
              </label>
              <label>
                <input type="checkbox" value="Reporting and Analytics" />
                Reporting and Analytics
              </label>
              <label>
                <input type="checkbox" value="Compliance Management" />
                Compliance Management
              </label>
            </CheckboxGroup>
          </InputField>

          {/* Company Size */}
          <InputField>
            <label htmlFor="company-size">What is the size of your company?</label>
            <select id="company-size" required>
              <option value="">Select</option>
              <option value="1-50">1-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
          </InputField>

          {/* Communication Method */}
          <InputField>
            <label>What is your preferred method of communication?</label>
            <CheckboxGroup>
              <label>
                <input type="checkbox" value="Email" />
                Email
              </label>
              <label>
                <input type="checkbox" value="Phone" />
                Phone
              </label>
              <label>
                <input type="checkbox" value="Video Call" />
                Video Call
              </label>
              <label>
                <input type="checkbox" value="In-Person Meeting" />
                In-Person Meeting
              </label>
            </CheckboxGroup>
          </InputField>

          {/* Budget */}
          <InputField>
            <label htmlFor="budget">
              What is your budget range for PLM software solutions?
            </label>
            <select id="budget" required>
              <option value="">Select</option>
              <option value="10k-50k">$10,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
          </InputField>

          {/* Timeline */}
          <InputField>
            <label htmlFor="timeline">What is your timeline for implementation?</label>
            <select id="timeline" required>
              <option value="">Select</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="1 year+">1 year+</option>
            </select>
          </InputField>

          {/* Challenges */}
          <InputField>
            <label htmlFor="challenges">
              What challenges are you currently facing with your product lifecycle
              management?
            </label>
            <textarea
              id="challenges"
              placeholder="Describe your challenges here..."
            ></textarea>
          </InputField>

          {/* Additional Comments */}
          <InputField>
            <label htmlFor="comments">Additional questions or comments</label>
            <textarea
              id="comments"
              placeholder="Enter your additional questions or comments..."
            ></textarea>
          </InputField>

          {/* Submit Button */}
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default CompleteIntakeForm;
