import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import pages
import About from "./pages/About";
import Landing from "./pages/Landing.jsx";
import Repairs from "./pages/Repairs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Repairs" element={<Repairs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
