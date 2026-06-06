import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Btn from "./Btn";

function Header() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-3 navbar navbar-dark bg-transparent fixed-top text-white">
        <span className="fs-2 fw-bolder">LOGO</span>
        <div className="d-flex align-items-center justify-content-center gap-4">
          <Link to={"/"} className="text-decoration-none text-white">
            Home
          </Link>
          {/* <Link to={"/About"} className="text-decoration-none text-black">
          About
        </Link>
        <Link to={"/Project"} className="text-decoration-none text-black">
          Project
        </Link> */}

          <span>About</span>
          <span>Project</span>

          <span className="btn btn-light rounded-5 d-flex align-items-center justify-content-center gap-2">
            Get in Touch{" "}
            <span className="rounded-circle bg-orange text-white p-1 d-flex align-items-center justify-content-center">
              <FaLongArrowAltRight />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
