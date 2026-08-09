import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}

export default App;
