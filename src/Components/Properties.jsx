import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Properties() {
  return (
    <>

      <div
        className="container-fluid mt-2 py-2"
      >
        <div className="d-flex justify-content-center flex-wrap gap-4">
          <div className="d-flex align-items-center gap-2">
            <img
              src="/contact.png"
              alt="Contacts"
              width="28"
              height="28"
            />
            <span>
              Access to <strong>700M+ Contacts</strong>
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <img
              src="/cursor.png"
              alt="CRM Push"
              width="28"
              height="28"
            />
            <span>
              <strong>One click push</strong> to CRM
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <img
              src="/cube.png"
              alt="Custom Fields"
              width="28"
              height="28"
            />
            <span>
              <strong>Custom Field</strong> Mapping
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <img
              src="/waterfall.png"
              alt="Waterfall"
              width="28"
              height="28"
            />
            <span>
              Advanced <strong>Waterfall Enrichment</strong>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Properties;
