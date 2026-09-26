import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Work from "./Pages/Work.jsx";

import Nav from "./components/Nav.jsx";
import ClickSpark from "./fun-components/Click/ClickSpark.jsx";

function App() {
  return (
    <>
      <ClickSpark>
        <Nav />
        <Home /><About />
        <Work />
      </ClickSpark>


    </>
  );
}

export default App;
