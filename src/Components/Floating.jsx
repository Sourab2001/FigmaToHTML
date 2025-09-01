import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Floating() {
  return (
    <div
      className="position-fixed bottom-0 start-50 translate-middle-x p-3"
      style={{ zIndex: 9999, width: "100%", maxWidth: "850px" }}
    >
      <div
        className="p-4 rounded-4 shadow-sm"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          className="d-flex flex-wrap align-items-center justify-content-between p-3 rounded-4"
          style={{ backgroundColor: "#ffeefe" }}
        >
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex">
              <img
                src="/floatinguser3.png"
                alt="User1"
                className="rounded-circle border border-white"
                width="40"
                height="40"
                style={{ marginLeft: "-8px" }}
              />
              <img
                src="/floatinguser2.png"
                alt="User2"
                className="rounded-circle border border-white"
                width="40"
                height="40"
                style={{ marginLeft: "-8px" }}
              />
              <img
                src="/floatinguser1.png"
                alt="User3"
                className="rounded-circle border border-white"
                width="40"
                height="40"
                style={{ marginLeft: "-8px" }}
              />
            </div>
            <h6 className="mb-0 fw-semibold">
              Join with our Thousands of professionals Now !
            </h6>
          </div>

          <a
            href="#"
            className="btn fw-semibold rounded-3"
            style={{ backgroundColor: "#a6ff8f", color: "#000" }}
          >
            Get a Free Trial Now!
          </a>
        </div>

        <div className="d-flex justify-content-center gap-5 mt-3 flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <img src="/creditcard.png" alt="Credit" width="24" height="24" />
            <span>
              <strong>No Credit Card</strong> Required
            </span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <img src="/clock.png" alt="Credit" width="24" height="24" />
            <span>
              <strong>14 Days Free</strong> Trial
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floating;
