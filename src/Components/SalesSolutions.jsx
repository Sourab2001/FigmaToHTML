import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function SalesSolutions() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Complete LinkedIn Sales Solutions</h2>
        <p className="text-muted">
          Everything you need for professional LinkedIn prospecting
        </p>
      </div>

      <div className="d-flex justify-content-center gap-4 border-bottom pb-2 mb-4">
        <div className="d-flex align-items-center gap-2 fw-bold text-primary border-bottom border-primary pb-2">
          <img src="/crm.png" alt="" width='20px' /> CRM Data Enrichment
        </div>
        <div className="d-flex align-items-center gap-2 text-muted">
          <img src="/reload.png" alt="" width='20px' /> CRM Data Sync
        </div>
        <div className="d-flex align-items-center gap-2 text-muted">
          <img src="/location.png" alt="" width='25px' /> Bulk Export & Enrichment
        </div>
        <div className="d-flex align-items-center gap-2 text-muted">
          <img src="/brain.png" alt="" width='25px' /> AI Productivity
        </div>
      </div>

      <p className="text-center text-muted">
        It's hard to find the accurate contact data for every prospects by{" "}
        <span className="badge bg-light text-danger">Incomplete Data</span>
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="p-4 rounded-4 shadow-sm bg-light h-100">
            <h6 className="fw-bold mb-2">
              Here is how LeadCRM tackles that situation.
            </h6>
            <a href="#" className="text-success fw-bold">
              Try LeadCRM Data Enrichment &gt;
            </a>

            <div className="row mt-3 g-3">
             

            <img src="crm-data2.png" alt="crm-data" width="100%"/>
             
            </div>
          </div>
        </div>

        <div className="col-md-6">
            
          <div className="p-4 rounded-4 shadow-sm bg-light h-100">
            <h6 className="fw-bold mb-2">
              If it does not works for you ! try our{" "}
              <span className="text-success">Advanced Waterfall Enrichment &gt;</span>
            </h6>
            <img src="crm-data.webp" alt="crm-data" width="100%"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesSolutions;
