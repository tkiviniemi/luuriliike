import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Landing from "./pages/Landing.jsx";
import About from "./pages/About";
import Repairs from "./pages/Repairs";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Repairs" element={<Repairs />} />
        <Route path="/pages/Shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
