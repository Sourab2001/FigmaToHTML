import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Testimonials() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">What people are saying about LeadCRM</h3>
        <div className="d-flex gap-2">
          <button className="btn btn-dark rounded-circle">
            <i className="bi bi-chevron-left"></i> 
          </button>
          <button className="btn btn-dark rounded-circle">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <p className="text-muted mb-3">
              "Reliable Data Sync I've only had to refresh the extension a
              couple of times. The multi-contact enrichment is still a huge
              plus, and support is very responsive."
            </p>
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="/playarrow.png" alt="playarrow" width="20" height="20" />
              <div className="text-warning">
                ★★★★★
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-2">
              <img
                src="/Testimonials1.png"
                alt="User 1"
                className="rounded-circle"
                width="40"
                height="40"
              />
              <div>
                <h6 className="mb-0 fw-bold">David Fincher</h6>
                <small className="text-muted">On Capterra</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <p className="text-muted mb-3">
              "My experience with LeadCRM has been excellent. It has streamlined
              my workflow, improved lead tracking, and made follow-ups more
              efficient. The responsive customer support is a big plus. Highly
              recommend it for reliable lead management!"
            </p>
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="/playarrow.png" alt="playarrow" width="20" height="20" />
              <div className="text-warning">
                ★★★★★
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-2">
              <img
                src="/Testimonials3.png"
                alt="User 2"
                className="rounded-circle"
                width="40"
                height="40"
              />
              <div>
                <h6 className="mb-0 fw-bold">Lillian Williams</h6>
                <small className="text-muted">On Capterra</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100 p-4 rounded-4">
            <p className="text-muted mb-3">
              "Reliable Data Sync I've only had to refresh the extension a
              couple of times. The multi-contact enrichment is still a huge
              plus, and support is very responsive."
            </p>
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="/playarrow.png" alt="playarrow" width="20" height="20" />
              <div className="text-warning">
                ★★★★☆
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-2">
              <img
                src="/Testimonials2.png"
                alt="User 3"
                className="rounded-circle"
                width="40"
                height="40"
              />
              <div>
                <h6 className="mb-0 fw-bold">Michael</h6>
                <small className="text-muted">On Capterra</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
