import { FaLongArrowAltRight } from "react-icons/fa";
function Btn({ btnBg, btnText, arrowBg, arrowText }) {
  return (
    <>
      <span
        className={`btn btn-warning ${btnText} ${btnBg} rounded-5 d-flex align-items-center justify-content-center gap-2`}>
        Get in Touch{" "}
        <span
          className={`${arrowBg} ${arrowText} rounded-circle  p-1 d-flex align-items-center justify-content-center`}>
          <FaLongArrowAltRight />
        </span>
      </span>
    </>
  );
}

export default Btn;
