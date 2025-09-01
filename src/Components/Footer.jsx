import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <>
      <footer className="container-fluid bg-light text-dark pt-4 pb-2 border-top">
        <div className="row px-4">
          <div className="col-md-3 mb-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="/Logo.png" alt="LeadCRM Logo" width="100" />
            </div>
            <p className="small">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            <div className="d-flex gap-3 mt-3">
                <img src="/facebook.png" alt="facebook"/>
                <img src="/twitter.png" alt="twitter"/>
                <img src="/linkedin.png" alt="linkedin"/>
                <img src="/instagram.png" alt="instagram"/>
            </div>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Integrations</h6>
            <ul className="list-unstyled small">
              <li>HubSpot</li>
              <li>Salesforce</li>
              <li>Pipedrive</li>
              <li>
                Close.io{" "}
                <span className="badge bg-success ms-1">Coming Soon</span>
              </li>
              <li>
                Insightly{" "}
                <span className="badge bg-success ms-1">Coming Soon</span>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Alternative</h6>
            <ul className="list-unstyled small">
              <li>Surfe VS LeadCRM</li>
              <li>Linkmatch Alternative</li>
            </ul>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled small">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">
                <img src="/mail.png" alt="facebook" width="20" />

              <i className="me-2"></i> support@leadcrm.io
            </p>
            <p className="small mb-1">
                <img src="/call.png" alt="facebook" width="20" />
                
              <i className="me-2"></i> +1 231-538-7466
            </p>
            <p className="small mb-3">
                <img src="/question.png" alt="facebook" width="20" />

              <i className="me-2"></i> Help Center 
            </p>

            <button className="btn btn-dark btn-sm rounded-pill px-3">
              <i className="me-1"></i> Available in Chrome 
                <img src="/chrome.png" alt="facebook" width="20" />

            </button>

          </div>
        </div>

        <div className="text-center small text-muted border-top pt-2">
          <p className="mb-1">
            Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All
            LinkedIn™ logos and trademarks displayed on this tool are property
            of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is
            at your own risk.
          </p>
          <p className="mb-0">Copyright © 2025 LeadCRM. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
