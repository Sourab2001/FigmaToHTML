import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import icon from "../../public/comment-icon.webp";
import leadcrm from "../../public/leadcrm.png";



function SupportedLeadCRm() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="text-center mb-3">
        <img src={icon} alt="Supported CRM Icon" style={{ width: "80px", height: "80px" }} /> 
      </div>

      <h2 className="text-center fw-bold mb-3">
        Our Supported LeadCRM
      </h2>
      <div className="text-center">
        <span>LeadCRM provides Native Integrations with popular CRM tools to make the most out of your Linkdin processing. We don't want you to miss any revenue opprtunity on the internet!</span>
      </div>

      <div className="position-relative text-white rounded-4 overflow-hidden" style={{minHeight: "600px" }}>
        <img
          src={leadcrm}
          alt="LinkedIn Powerhouse"
          className="img img-fluid w-100 h-100 object-fit-cover"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        />

        <div 
          className="w-100 h-100"
        ></div>
        
      </div>
      <div className="d-flex justify-content-center my-4">
        <a 
          href="#" 
          className="btn btn-lg shadow px-4 fw-bold"
          style={{ 
            backgroundColor: "#B3FC6A", 
            borderColor: "#99ED6D", 
            color: "#333" 
          }}
        >
          Lets Integrate your CRM Now!
        </a>
      </div>
    </div>
  );
}

export default SupportedLeadCRm;