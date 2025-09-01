import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/Logo.png" alt="Logo" className="me-2" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="py-3 collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Product
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Product 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product 2
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link fw-bold" href="#">
                Pricing
              </a>
            </li>

            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Docs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Company
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                style={{ backgroundColor: "#2d96bc" }}
                className="btn text-white fw-semibold me-2 d-flex align-items-center"
                href="#"
              >
                Get Your Free Account
              </a>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-outline-info d-flex align-items-center"
                href="#"
              >
                <i className="me-1"></i>
                <img
                  src="/login.png"
                  alt="Login Icon"
                  className="me-2"
                  width="20"
                  height="20"
                />
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
