import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
