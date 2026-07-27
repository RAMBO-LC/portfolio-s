import "./App.css";
import DotField from "./background/DotField.jsx";
import Name from "./components/Name.jsx";
import Nav from "./components/Nav.jsx";
import Card from "./fun-components/Card.jsx";
import Social from "./components/social.jsx";

function App() {
  return (
    <>
      <DotField />
      <div className="app-content">
        <Nav />
        <Name />
        <Social />
        <Card />
      </div>
    </>
  );
}

export default App;
