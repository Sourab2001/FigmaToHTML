import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import banner from "../../public/banner.png";
import line from "../../public/line.png";
import chrome from "../../public/chrome.png";
import playarrow from "../../public/playarrow.png";





function Banner() {
  return (
    <section className="py-5 bg-light text-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="container">

        <p
          className="text-muted small mb-2 d-inline-block px-3 py-2 rounded-pill"
          style={{ border: "1px solid #d9ecff" }}
        >
          <i className="bi bi-people-fill text-danger me-1"></i>
          Thousands of Professionals using LeadCRM
        </p>

        <h2 className="fw-bold display-6 text-center position-relative d-inline-block">
          LinkedIn CRM Integration <br />
          Capture, Sync and Enrich in{" "}
          <span className="text-info position-relative d-inline-block">
            Both Ways
            <img
              src={line}  
              alt="underline decoration"
              style={{
                position: "absolute",
                left: "60%",
                top: "100%",
                transform: "translateX(-50%)",
                marginTop: "5px", 
                width: "280px",   
                height: "auto",
              }}
            />
          </span>
        </h2>


        <p className="text-muted fw-semibold mt-3 mb-4">
          Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles.
          Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
        </p>

        <div
          className="d-inline-flex align-items-center gap-3 p-3 mb-4 rounded"
          style={{
            background: "linear-gradient(90.37deg, #5ED3FF -12.35%, #6EC6FE 0.67%, #EB65F4 100.24%, #FD58F2 114.28%)",
          }}
        >
          <span className="fw-semibold text-dark">Works with</span>

          <img
            src='./T.png'
            alt="HubSpot"
            width="40"
            height="40"
            className="rounded-circle"
          />
          <div
            className="d-flex justify-content-center align-items-center rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#21844a",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            P
          </div>
          <img
            src='./Salesforce.png'
            alt="Salesforce"
            width="40"
            height="40"
            className="rounded-circle"
          />
        </div>


        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 mb-4">
          <div>
            <img src={chrome} alt="Google" width="40" />
            <span className="ms-2">⭐⭐⭐⭐⭐ 5/5</span>
          </div>
          <div>
            <img src={playarrow} width="32" />
            <span className="ms-2">⭐⭐⭐⭐⭐ 5/5</span>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <a
            href="#"
            className="p-2 btn btn-dark d-flex align-items-center gap-2"
            style={{ borderRadius: "10px" }}
          >
            <div>
              <h5 style={{ fontSize: "10px" }} className="fw-semibold text-white mb-0">
                Available in <br />
                <span
                  style={{ fontSize: "15px" }}
                  className="px-1 fw-bold text-white"
                >
                  Chrome Web Store
                </span>
              </h5>
            </div>

            <img
              className="img-fluid"
              src={chrome}
              alt="chrome"
              width="28"
              height="28"
            />
          </a>

          <a
            href="#"
            style={{ backgroundColor: "#b3fc6a", borderRadius: "10px" }}
            className="btn px-4 py-2 fw-semibold text-dark"
          >
            Get a Free Trial Now!
          </a>
        </div>


      </div>
    </section>
  );
}

export default Banner;
