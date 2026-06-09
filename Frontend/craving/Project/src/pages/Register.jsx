import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="d-flex flex-column bg-login align-items-center align-items-md-end justify-content-center pe-md-5 px-3">
      <div
        className="card shadow-lg bg-white border-0 rounded-2 p-4 p-sm-5"
        style={{ width: "100%", maxWidth: "480px" }}>
        <div className="text-center mb-4">
          <h2 className="text-orange fs-2 fw-bold mb-1">Create Account</h2>
          <p className="text-muted fw-light mb-0">
            Join us as a Customer, Restaurant, or Rider
          </p>
        </div>

        <form className="d-flex flex-column gap-3 w-100">
          <div className="mb-2">
            <span className="d-block mb-2 fw-medium text-dark">
              Register as:
            </span>
            <div className="d-flex gap-4  align-items-center w-100 px-1">
              <div className="form-check form-check-inline m-0">
                <input
                  className="form-check-input border-secondary"
                  type="radio"
                  name="role"
                  id="customer"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="customer">
                  Customer
                </label>
              </div>

              <div className="form-check form-check-inline m-0">
                <input
                  className="form-check-input border-secondary "
                  type="radio"
                  name="role"
                  id="restaurant"
                />
                <label className="form-check-label" htmlFor="restaurant">
                  Restaurant
                </label>
              </div>

              <div className="form-check form-check-inline m-0">
                <input
                  className="form-check-input border-secondary"
                  type="radio"
                  name="role"
                  id="rider"
                />
                <label className="form-check-label" htmlFor="rider">
                  Rider
                </label>
              </div>
            </div>
          </div>

          <input
            type="text"
            name="fullName"
            className="form-control focus-ring focus-ring-orange py-2"
            placeholder="Enter your full name"
            required
          />

          <input
            type="email"
            name="email"
            className="form-control focus-ring focus-ring-orange py-2"
            placeholder="Enter your email"
            required
          />

          <input
            type="tel"
            name="phoneNumber"
            className="form-control focus-ring focus-ring-orange py-2"
            placeholder="Enter your phone number"
            required
          />

          <input
            type="password"
            name="password"
            className="form-control focus-ring focus-ring-orange py-2"
            placeholder="Enter your password"
            required
          />

          <input
            type="password"
            name="repeatPassword"
            className="form-control focus-ring focus-ring-orange py-2"
            placeholder="Confirm your password"
            required
          />

          <div className="form-check d-flex align-items-center mt-2 mb-2 gap-2">
            <input
              className="form-check-input m-0"
              type="checkbox"
              id="termCondition"
              name="termCondition"
              required
            />
            <label
              className="form-check-label text-muted"
              htmlFor="termCondition"
              style={{ fontSize: "0.9rem" }}>
              I agree to the{" "}
              <span
                className="text-orange fw-medium pointer"
                style={{ cursor: "pointer" }}>
                terms and conditions
              </span>
              .
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-orange w-100 py-2 fw-medium fs-6 mt-1 rounded-3">
            Register
          </button>
        </form>

        <div
          className="mt-4 text-center text-secondary"
          style={{ fontSize: "0.95rem" }}>
          Already registered?{" "}
          <Link
            to="/login"
            className="text-orange fw-medium text-decoration-none transition-all hover-opacity">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
