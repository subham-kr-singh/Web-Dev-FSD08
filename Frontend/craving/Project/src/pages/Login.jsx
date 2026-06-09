import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex flex-column bg-login align-items-center align-items-md-start justify-content-center min-vh-100 pe-md-5 px-3">
      <div
        className="card shadow-lg bg-white border-0 rounded-2 p-4 p-sm-5"
        style={{ width: "100%", maxWidth: "480px" }}>
        <div className="text-center mb-4">
          <h2 className="text-orange fs-2 fw-bold mb-1">Welcome Back</h2>
          <p className="fw-light text-muted mb-0">
            Login to your Cravings account
          </p>
        </div>

        <form className="d-flex flex-column w-100">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label fw-medium text-dark mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control py-2 focus-ring focus-ring-orange"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-medium text-dark mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control py-2 focus-ring focus-ring-orange"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-flex align-items-center justify-content-between mb-4 mt-1">
            <div className="form-check m-0 d-flex align-items-center gap-2">
              <input
                type="checkbox"
                className="form-check-input border-secondary m-0"
                id="rememberMe"
              />
              <label
                className="form-check-label fw-light text-muted"
                htmlFor="rememberMe"
                style={{ fontSize: "0.9rem" }}>
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className="text-orange text-decoration-none fw-medium"
              style={{ fontSize: "0.9rem" }}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-orange w-100 py-2.5 fw-bold fs-6 rounded-3">
            Login
          </button>
        </form>

        <div
          className="mt-4 text-center text-secondary"
          style={{ fontSize: "0.95rem" }}>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-orange fw-medium text-decoration-none">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
