import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MakeUp from "./pages/MakeUp";
import Detail from "./pages/Preview";
import GenericPage from "./pages/GenericPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makeup" element={<MakeUp />} />
          <Route path="/makeup/preview/:id" element={<Detail />} />

          <Route path="/category" element={<GenericPage title="Category" />} />
          <Route path="/brands" element={<GenericPage title="Brands" />} />
          <Route path="/luxe" element={<GenericPage title="Luxe" />} />
          <Route path="/nykaa-fashion" element={<GenericPage title="Nykaa Fashion" />} />
          <Route path="/beauty-advice" element={<GenericPage title="Beauty Advice" />} />

          <Route path="/skin" element={<GenericPage title="Skin" />} />
          <Route path="/hair" element={<GenericPage title="Hair" />} />
          <Route path="/bath-and-body" element={<GenericPage title="Bath & Body" />} />
          <Route path="/natural" element={<GenericPage title="Natural" />} />
          <Route path="/mom-and-baby" element={<GenericPage title="Mom & Baby" />} />
          <Route path="/health-and-wellness" element={<GenericPage title="Health & Wellness" />} />
          <Route path="/men" element={<GenericPage title="Men" />} />
          <Route path="/fragrance" element={<GenericPage title="Fragrance" />} />
          <Route path="/lingerie-and-accessories" element={<GenericPage title="Lingerie & Accessories" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
