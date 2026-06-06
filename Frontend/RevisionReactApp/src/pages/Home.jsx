import Btn from "../components/Btn";

function Home() {
  return (
    <>
      <div className="d-flex rounded-bottom bg-img rounded-bottom-5 shadow overflow-hidden w-100 h-100 vh-100">
        <div className="d-flex vh-100 align-items-center justify-content-between w-100">
          <div className="mt-full p-3 d-flex flex-column align-items-start">
            <span className="fs-1 text-orange">Selected Work</span>
            <h1 className="fw-bold" id="text">
              Projects
            </h1>
          </div>
          <div className="d-flex flex-column gap-3 mt-full p-3">
            <span className="fs-1 fw-bolder">
              Real Brands , Real <br /> results
            </span>
            <p className="fw-light fs-3 fw-lighter text-text-light">
              Take a closer look at how strategy and <br /> design come together
              to build brands that
              <br /> connect and endure.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between h-50 w-100 p-3 mt-5">
        <div className="d-flex flex-column h-25 w-50 mt-4">
          <span className="text-orange fw-bold fs-2">Selected Work</span>
          <p className="fs-full fw-bold text-wrap">
            Bringing Brands <br /> to life through <br /> Desgin{" "}
          </p>
        </div>
        <div className="d-flex flex-column mt-4">
          <p className="fs-2 fw-bold">
            A curated collection of visual <br /> identites, packinging , and
            creative <br />
            systems built for impact.
          </p>

          <div className="d-flex justify-content-between align-items-center mt-2 p-2">
            <span className="text-uppercase fw-lighter fs-4">
              let's build something <br /> meaningful together
            </span>

            <Btn />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
