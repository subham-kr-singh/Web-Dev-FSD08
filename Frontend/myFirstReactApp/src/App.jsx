import Header from "./components/Header";
import Footer from "./components/Footer";
import Left from "./components/Left";
import Right from "./components/Right";
function App() {
  return (
    <>
      <div className="vh-100 d-flex flex-column">
        <Header />
        <div className="w-100 d-flex" id="main">
          <Left />
          <Right />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
