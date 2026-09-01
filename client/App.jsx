import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Work from "./Pages/Work.jsx";

import Nav from "./components/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Work />
    </>
  );
}

export default App;
