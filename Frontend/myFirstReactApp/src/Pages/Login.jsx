import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();

    console.log(`Username : ${userName}`);
    console.log(`password : ${password}`);
  };

  return (
    <div className="vh-100 w-100 d-flex">
      <div className="w-50 h-100 bg-success"></div>
      <div className="w-50 h-100 border bg-light">
        <div className="w-100 h-100 d-flex flex-column align-items-center mt-3 p-5 ">
          <span className="fs-1 fw-bolder text-center mb-5">Welcome Back</span>
          <form className="form-control container shadow bg-light d-flex flex-column gap-3 justify-content-around p-5 ">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              className="form-control"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="form-control"
            />

            <button className="btn btn-success" onClick={HandleSubmit}>
              Submit
            </button>
            <span>
              Don't have an account?{" "}
              <span>
                <Link to="/register">Register</Link>
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
