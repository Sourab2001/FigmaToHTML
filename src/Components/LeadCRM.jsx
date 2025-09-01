import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import reload from "../../public/reload.png";
import contact from "../../public/contact.png";
import crm from "../../public/crm.png";
import location from "../../public/location.png";
import saveImage from "../../public/save.png";
import withcrm from "../../public/withcrm.png";
import withoutcrm from "../../public/withoutcrm.png";


function DailyChanges() {
  return (
    <div className="container my-5">
      <h3 className="text-center fw-bold mb-5">
        Every LinkedIn Prospector faces these daily challenges
      </h3>

      <div className="row g-4 align-items-center">
        <div className="col-lg-6" style={{backgroundColor:"#f9f0f8"}}>
          <div className="p-4 rounded h-100" >
            <h5 className="text-danger fw-bold mb-4">Without LeadCRM</h5>

            <div className="mb-3 text-center" >
              <img
                src={withoutcrm}
                alt="Without LeadCRM"
                className="img-fluid rounded pb-3"
              />
              <ul className="list-unstyled p-2" style={{backgroundColor:"#f9f0f8"}}>
              <li className="d-flex mb-3">
                <i className="text-danger me-2"></i>
                <div>
                  <strong> ❌ Manual Data Entry</strong>{" "}
                  <span className="badge bg-danger">3+ Hours wasted daily</span>
                  <br />
                  Copying LinkedIn contacts to CRM manually plus losing
                  conversation history.
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className=" text-danger me-2"></i>
                <div>
                  <strong>❌ Incomplete Data</strong>{" "}
                  <span className="badge bg-warning text-dark">
                    60% Data Incomplete
                  </span>
                  <br />
                  LinkedIn profiles missing Email and Phones from 700M+ Database.
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="text-danger me-2"></i>
                <div>
                  <strong> ❌ No CRM Visibility</strong>{" "}
                  <span className="badge bg-secondary">Zero context available</span>
                  <br />
                  Can't see existing CRM contacts when browsing LinkedIn profiles.
                </div>
              </li>
              <li className="d-flex">
                <i className="text-danger me-2"></i>
                <div>
                  <strong > ❌ Limited Productivity</strong>{" "}
                  <span className="badge bg-danger">No smart assistance</span>
                  <br />
                  Writing messages manually plus no AI assistant for reply, invite,
                  or comments.
                </div>
              </li>
            </ul>
            </div>

            
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-4 rounded shadow-sm bg-white h-100">
            <h5 className="text-success fw-bold mb-4">
              With LeadCRM{" "}
              <span className="badge bg-success">4+ Hours/day Saved</span>
            </h5>

            <div className="mb-3 text-center">
              <img
                src={withcrm}
                alt="With LeadCRM"
                className="img-fluid rounded pb-3"
              />
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <i className="text-success me-2"></i>
                <div>
                  <img src={reload} style={{ width: '5%' }} alt="complete" />
                  <strong>Complete Bi-Directional Sync</strong>
                  <br />
                  Automatically sync contacts, messages, and notes between LinkedIn
                  and CRM in real time.
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="text-success me-2"></i>
                <div>
                  <img src={contact} style={{ width: '5%' }} alt="complete" />

                  <strong>700M+ Contacts + Enrichment</strong>
                  <br />
                  Get verified emails and phone numbers from a vast global database.
                </div>
              </li>
              <li className="d-flex mb-3">
                <i className="text-success me-2"></i>
                <div>
                  <img src={location} style={{ width: '5%' }} alt="complete" />

                  <strong>CRM Overlay on LinkedIn</strong>
                  <br />
                  See full CRM insights directly on LinkedIn profiles without
                  switching tabs.
                </div>
              </li>
              <li className="d-flex">
                <i className="text-success me-2"></i>
                <div>
                  <img src={crm} style={{ width: '5%' }} alt="complete" />

                  <strong>AI Response + Templates + Bulk Exports</strong>
                  <br />
                  Save time with AI-crafted replies, pre-built templates, and
                  one-click data exports.
                </div>
              </li>
            </ul>
            </div>

           
          </div>
        </div>
      </div>

  <div className="d-flex justify-content-center mt-5 position-relative" style={{ minHeight: "30px" }}>
  <a
    href="#"
    className="mt-4 btn fw-bold py-2 px-4 rounded shadow"
    style={{
      backgroundColor: "#b3fc6a",
      color: "#333",
      border: "none",
      zIndex: 1,
      whiteSpace: "nowrap",
    }}
  >
    Get a Free Account Now!
  </a>

  <img
    src={saveImage}
    alt="Save 40+ hours every Month"
    className="img-fluid position-absolute d-none d-sm-block"
    style={{
      maxWidth: "23vw",
      top: "-4vw", 
      left: "55%", 
      transform: "translateX(10%)",
      zIndex: 0,
    }}
  />
</div>  
    </div>
  );
}

export default DailyChanges;