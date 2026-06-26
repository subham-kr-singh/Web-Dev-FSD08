import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Cleaned up imports

function Header() {
  const navigate = useNavigate(); // 1. Moved inside the component

  return (
    <>
      <div className="navbar navbar-expand-lg bg-orange sticky-top d-flex justify-content-between align-items-center px-5">
        <img
          src="/favicon.png" // 2. Changed to direct absolute path from public directory
          alt="Company Logo"
          className="popover-arrow"
          id="icon"
          style={{ cursor: "pointer" }} // Makes it visually clickable
          onClick={() => navigate("/")}
        />
        <div className="d-flex align-items-center justify-content-between gap-3 m-0">
          <Link to="/login">
            <button className="btn btn-orange">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-light text-orange">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
