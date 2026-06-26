import React from "react";
import { Link } from "react-router-dom"; // Imported React Router Link
import logo from "/logo.png";

function Footer() {
  return (
    <footer className="bg-night text-white py-5">
      <div className="container">
        {/* Top Header: Tagline and Logo info */}
        <div className="text-center mb-5">
          <p className="text-light small max-w-xl mx-auto italic">
            --- Your favorite food delivery platform connecting customers with
            restaurants and riders. ---
          </p>
        </div>

        {/* Middle Section: Main Link Grid */}
        <div className="row text-light opacity-75 g-4 mb-4 align-items-start">
          {/* Logo column */}
          <div className="col-12 col-md-2 text-center text-md-start">
            <img
              src={logo}
              alt="Cravings Logo"
              className="mb-3"
              style={{ width: "120px" }}
            />
          </div>

          {/* Column 1: Quick Links */}
          <div className="col-12 col-sm-6 col-md-2">
            <h6 className="text-white fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-light text-decoration-none">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: For Restaurants */}
          <div className="col-12 col-sm-6 col-md-3">
            <h6 className="text-white fw-bold mb-3">For Restaurants</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/partner" className="text-light text-decoration-none">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant-dashboard"
                  className="text-light text-decoration-none">
                  Restaurant Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Riders */}
          <div className="col-12 col-sm-6 col-md-2">
            <h6 className="text-white fw-bold mb-3">For Riders</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link
                  to="/become-rider"
                  className="text-light text-decoration-none">
                  Become a Rider
                </Link>
              </li>
              <li>
                <Link
                  to="/rider-dashboard"
                  className="text-light text-decoration-none">
                  Rider Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Feedback & Support */}
          <div className="col-12 col-sm-6 col-md-3">
            <h6 className="text-white fw-bold mb-3">Feedback & Support</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link
                  to="/feedback"
                  className="text-light text-decoration-none">
                  Submit Feedback
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-light text-decoration-none">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal */}
        <div className="w-100 border-top border-light opacity-50 text-light small pt-3 mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="mb-2 mb-md-0">
            &copy; 2026 Cravings. All rights reserved.
          </span>

          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <Link
                to="/privacy"
                className="text-light text-decoration-none me-3">
                Privacy Policy
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="/terms"
                className="text-light text-decoration-none me-3">
                Terms of Service
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/sitemap" className="text-light text-decoration-none">
                Site Map
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
