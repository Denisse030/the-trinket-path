import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Trinkets from "./pages/Trinkets";
import Cafes from "./pages/Cafes";
import Galleries from "./pages/Galleries";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trinkets" element={<Trinkets />} />
        <Route path="/cafes" element={<Cafes />} />
        <Route path="/galleries" element={<Galleries />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;