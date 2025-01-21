import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PLMImplementation from "./components/PLMImplementation";
import CustomPLMSolutions from "./components/CustomPLMSolutions";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PLMTrainingAndSupport from "./components/PLMTrainingAndSupport";
import ScheduleMeeting from "./components/ScheduleMeeting";
import CompleteIntakeForm from "./components/CompleteIntakeForm";

const MainPage = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header /> {/* Persisted across all pages */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services/plm-implementation" element={<PLMImplementation />} />
        <Route path="/services/custom-plm-solutions" element={<CustomPLMSolutions />} />
        <Route path="/services/plm-training-support" element={<PLMTrainingAndSupport />} />
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
        <Route path="/intake-form" element={<CompleteIntakeForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
