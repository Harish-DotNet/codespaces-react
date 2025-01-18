import React, { useEffect } from "react";
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
  useEffect(() => {
    const logElementWidths = () => {
      console.log("Viewport Width:", window.innerWidth);
      console.log("HTML Width:", document.documentElement.clientWidth, document.documentElement.scrollWidth);
      console.log("Body Width:", document.body.clientWidth, document.body.scrollWidth);
      console.log("#root Width:", document.getElementById("root").clientWidth, document.getElementById("root").scrollWidth);
  
      document.querySelectorAll("*").forEach((el) => {
        if (el.scrollWidth > document.documentElement.clientWidth) {
          console.log("Overflowing Element:", el, el.scrollWidth);
          el.style.outline = "2px solid red"; // Highlight element
        }
      });
    };
  
    logElementWidths();
    window.addEventListener("resize", logElementWidths);
  
    return () => {
      window.removeEventListener("resize", logElementWidths);
    };
  }, []);

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
