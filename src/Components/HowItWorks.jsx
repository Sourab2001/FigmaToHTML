import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import work from "../../public/work.jpg";

import howitworks1 from "../../public/howitworks1.png";
import howitworks2 from "../../public/howitworks2.png";
import howitworks3 from "../../public/howitworks3.png";
import howitworks4 from "../../public/howitworks4.png";




function HowItWork() {
  return (
    <div className="container-fluid py-5 bg-light"
    style={{
            backgroundImage: `url(${work})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold">How it Works</h2>
        <p className="text-muted">
          From setup to success in <strong>4 simple steps</strong>
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow border-0 p-3 text-center">
            <h2 style={{fontSize:"80px"}} className="text-primary fw-bold">1</h2>
            <h5 className="fw-bold">Install the Extension</h5>
            <p className="text-muted">
              Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.
            </p>
            <img src={howitworks1} alt="Step 1" className="img-fluid rounded" />
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow border-0 p-3 text-center">
            <h2 style={{fontSize:"80px"}}  className="text-primary fw-bold">2</h2>
            <h5 className="fw-bold">Browse LinkedIn</h5>
            <p className="text-muted">
              Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.
            </p>
            <img src={howitworks2}alt="Step 2" className="img-fluid rounded" />
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow border-0 p-3 text-center">
            <h2 style={{fontSize:"80px"}}  className="text-primary fw-bold">3</h2>
            <h5 className="fw-bold">Get Enriched Data</h5>
            <p className="text-muted">
              Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.
            </p>
            <img src={howitworks3} alt="Step 3" className="img-fluid rounded" />
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card h-100 shadow border-0 p-3 text-center">
            <h2 style={{fontSize:"80px"}}  className="text-primary fw-bold">4</h2>
            <h5 className="fw-bold">Sync to CRM Instantly</h5>
            <p className="text-muted">
              Prospect data syncs to your CRM instantly with history, tracking, and AI-powered insights.
            </p>
            <img src={howitworks4} alt="Step 4" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <button style={{backgroundColor:"#B3FC6A"}} className="btn btn-lg px-4 shadow fw-semibold fs-6">
          Try LeadCRM Now <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  );
}

export default HowItWork;