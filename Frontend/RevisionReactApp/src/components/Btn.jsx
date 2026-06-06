import { FaLongArrowAltRight } from "react-icons/fa";
function Btn() {
  return (
    <>
      <span className="btn btn-warning bg-orange rounded-5 d-flex align-items-center justify-content-center gap-2 text-white">
        Get in Touch{" "}
        <span className="rounded-circle bg-white text-orange p-1 d-flex align-items-center justify-content-center">
          <FaLongArrowAltRight />
        </span>
      </span>
    </>
  );
}

export default Btn;
