import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Work from "./Pages/Work.jsx";

import Nav from "./components/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
      </main>
    </>
  );
}

export default App;
