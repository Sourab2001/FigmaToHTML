
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Properties from "./Components/Properties";
import LeadCRM from "./Components/LeadCRM";
import HowItWorks from "./Components/HowItWorks";
import Testimonials from "./Components/Testimonials";
import SalesSolutions from "./Components/SalesSolutions";
import Footer from "./Components/Footer";
import Management from "./Components/Management";
import SupportedLeadCRM from "./Components/SupportedLeadCRM";
import Floating from "./Components/Floating";

const App = () => {
  const [showFloating, setShowFloating] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowFloating(false); 
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <Properties />
      <LeadCRM />
      <HowItWorks />
      <Testimonials />
      <SalesSolutions/>
      <SupportedLeadCRM />
      <Management />

      {showFloating && <Floating />}

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
