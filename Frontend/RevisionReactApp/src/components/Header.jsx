import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Btn from "./Btn";

function Header() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between p-3 navbar navbar-dark bg-transparent fixed-top text-white">
        <span className="fs-2 fw-bolder">Foliobolx<span className="fs-6 text-orange">&reg;</span> </span>
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

          <Btn
            btnBg={"btn-light"}
            btnText={"text-orange"}
            arrowBg={"bg-orange"}
            arrowText={"text-white"}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
