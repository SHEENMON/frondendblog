import React from "react";

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top w-100"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "1050" }} // Ensures it's above all content
    >
      <div className="container">
        {/* Navbar Toggler for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="/">About</a></li>

            {/* Dropdown for Departments */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-white" 
                href="#" 
                id="departmentsDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Departments
              </a>
              <ul className="dropdown-menu" aria-labelledby="departmentsDropdown">
                <li><a className="dropdown-item" href="/pediatrics">Pediatrics</a></li>
                <li><a className="dropdown-item" href="/neurology">Neurology</a></li>
                <li><a className="dropdown-item" href="/orthopedics">Orthopedics</a></li>
                <li><a className="dropdown-item" href="/cardiology">Cardiology</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link text-white" href="/case-studies">Case Studies</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* "Book Service" Button - Styled & Positioned Correctly */}
        <a className="btn btn-success text-white px-3 py-2 rounded-pill fw-bold ms-3" href="#">
          Book Service
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
