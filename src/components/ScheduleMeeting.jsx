import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #ffffff;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #333333;
  margin-bottom: 2rem;
`;

const CalendarWrapper = styled.div`
  margin-bottom: 2rem;

  .react-calendar {
    border: 1px solid #cccccc;
    border-radius: 10px;
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 1rem 2rem;
  border: 1px solid #dddddd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #28a745;
  color: #ffffff;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background: #1e7b34;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  background: #28a745;
  color: #ffffff;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #1e7b34;
  }
`;

const TimeSlotButton = styled(Button)`
  background: #ffffff;
  color: #28a745;
  border: 1px solid #28a745;
  margin: 0.5rem;
  font-size: 1rem;

  &:hover {
    background: #28a745;
    color: #ffffff;
  }

  &.selected {
    background: #28a745;
    color: #ffffff;
  }
`;

const ScheduleMeeting = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const timeSlots = [
    "7:00–7:30 pm",
    "7:30–8:00 pm",
    "8:00–8:30 pm",
    "8:30–9:00 pm",
    "9:00–9:30 pm",
    "9:30–10:00 pm",
    "10:00–10:30 pm",
    "10:30–11:00 pm",
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    if (!selectedTime) {
      alert("Please select a time slot!");
      return;
    }
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Meeting scheduled on ${selectedDate.toDateString()} at ${selectedTime}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nServices: ${formData.services.join(
        ", "
      )}\nMessage: ${formData.message}`
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <PageWrapper>
      <Title>Meeting Request Form</Title>
      <Subtitle>We look forward to meeting with you</Subtitle>
      <CalendarWrapper>
        <Calendar
          onClickDay={handleDateClick}
          value={selectedDate}
          minDate={new Date()}
        />
      </CalendarWrapper>
      {selectedDate && selectedTime && (
        <FormWrapper onSubmit={handleFormSubmit}>
          <h3>Your Details</h3>
          <p>
            <strong>Date:</strong> {selectedDate.toDateString()}
          </p>
          <p>
            <strong>Time:</strong> {selectedTime}
          </p>
          <InputField
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email address *"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            type="tel"
            name="phone"
            placeholder="Phone number *"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <CheckboxWrapper>
            <h4>Which service or services are you interested in?</h4>
            {["PLM software implementation", "Custom PLM solutions", "PLM training and support"].map(
              (service) => (
                <label key={service}>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(service)}
                    checked={formData.services.includes(service)}
                  />
                  {service}
                </label>
              )
            )}
          </CheckboxWrapper>
          <TextArea
            name="message"
            rows="5"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormWrapper>
      )}
      {showModal && (
        <ModalBackdrop onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Select a Time Slot</h3>
            <div>
              {timeSlots.map((slot) => (
                <TimeSlotButton
                  key={slot}
                  className={selectedTime === slot ? "selected" : ""}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </TimeSlotButton>
              ))}
            </div>
            <Button onClick={handleModalSubmit}>Confirm</Button>
          </ModalContent>
        </ModalBackdrop>
      )}
    </PageWrapper>
  );
};

export default ScheduleMeeting;
