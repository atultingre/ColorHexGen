import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Atul Tingre
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#">
                  Color Palatte
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/colorgradientgen"
                  className="nav-link active"
                  aria-current="page"
                  href="#">
                  Color Gradient
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/colorhexgen"
                  className="nav-link active"
                  aria-current="page"
                  href="#">
                  Color Hex
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
