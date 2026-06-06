import { useState } from "react";

function Register() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();

    console.log(`Full Name : ${fullName}`);
    console.log(`Username : ${userName}`);
    console.log(`email : ${email}`);
    console.log(`password : ${password}`);
  };
  return (
    <div className="vh-100 d-flex justify-content-center mt-0 bg-green">
      <div className="d-flex flex-column h-75 w-75 align-items-center justify-content-center">
        <div className=" bg-img-reg h-25 d-flex justify-content-center align-items-center w-50">
          {/* <span className="fs-1 fw-bolder text-white"></span> */}
        </div>
        <form className="form-control d-flex flex-column container p-3 gap-3 shadow w-50">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            className="form-control"
            placeholder="Enter your Full Name"
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
          <label htmlFor="fullName">Username</label>
          <input
            type="text"
            name="username"
            value={userName}
            className="form-control"
            placeholder="Enter your username"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <label htmlFor="fullName">email</label>
          <input
            type="text"
            name="email"
            value={email}
            className="form-control"
            placeholder="Enter your Email id"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="fullName">password</label>
          <input
            type="text"
            name="password"
            value={password}
            className="form-control"
            placeholder="create your Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <button className="btn btn-success" onClick={HandleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
