import Header from "../components/Header";
import Footer from "../components/Footer";
import Left from "../components/Left";
import Right from "../components/Right";
function Home() {
  return (
    <>
      <div className="vh-fit w-100 d-flex" id="main">
        <Left />
        <Right />
      </div>
      <Footer />
    </>
  );
}

export default Home;
