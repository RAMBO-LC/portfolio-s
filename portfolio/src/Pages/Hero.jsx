import "./Hero.css";
import DotField from "../background/DotField.jsx";
import Name from "../components/Name.jsx";
import Card from "../fun-components/Card.jsx";

function Hero() {
  return (
    <>
      <DotField />
      <div className="app-content">
        <Name />
        <Card />
      </div>
    </>
  );
}

export default Hero;
