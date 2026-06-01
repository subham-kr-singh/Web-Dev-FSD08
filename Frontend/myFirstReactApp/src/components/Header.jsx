import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        id="header"
        className="bg-light text-black border border-1 bottom-2 d-flex justify-content-between align-items-center">
        <div className="fs-4 fw-bold">
          <span>LOGO</span>
        </div>
        <ul className="d-flex justify-content-around align-items-center gap-3 list-unstyled">
          <li>
            <Link to={"/"} className=" text-decoration-none text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className=" text-decoration-none text-black">
              About
            </Link>
          </li>
          <li>
            <Link to={"/product"} className=" text-decoration-none text-black">
              Product
            </Link>
          </li>
          <li>
            <Link
              to={"/contact-us"}
              className=" text-decoration-none text-black">
              Contact us
            </Link>
          </li>
        </ul>

        <div className="d-flex align-items-center justify-content-center gap-3">
          <Link to={"/login"}>
            <button className="btn btn-outline-success">Login</button>
          </Link>
          <Link to={"register"}>
            <button className="btn btn-success">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
