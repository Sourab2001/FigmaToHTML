import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import sales from "/public/sales.jpg"; 

function Management() {
  return (
    <div className="container-fluid bg-light py-5">
      <h2 className="text-start fw-bold mb-3">
        Join Thousands of Professionals Using LeadCRM
      </h2>

      <div 
        className="position-relative text-white rounded-4 shadow overflow-hidden" 
        style={{ backgroundColor: "#2691d3", minHeight: "300px" }}
      >
        <img
          src={sales}
          alt="LinkedIn Powerhouse"
          className="img-fluid w-100 h-100 object-fit-cover"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        />

        <div 
          className="position-absolute w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1 }}
        ></div>

        <div 
          className="position-relative d-flex flex-column justify-content-center align-items-center text-center pt-3 h-100" 
          style={{ zIndex: 2 }}
        >
          <h3 className="fw-bold mb-4 fs-4 fs-md-2">
            Your LinkedIn Powerhouse for Smarter Lead Management
          </h3>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4">
        <a 
          href="#" 
          className="btn btn-lg px-4 shadow fw-bold"
          style={{ 
            backgroundColor: "#B3FC6A", 
            borderColor: "#99ED6D", 
            color: "#333" 
          }}
        >
          Get Started Today →
        </a>
      </div>
    </div>
  );
}

export default Management;
