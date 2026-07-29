import "../components/hero.css";
import DotField from "../background/DotField.jsx";
import Name from "../components/Name.jsx";
import Card from "../fun-components/Card.jsx";
import Nav from "../components/Nav.jsx";
import Social from "../components/Social.jsx";

function Home() {
  return (
    <section className="hero-container">
      <DotField />
      <Nav />
      <Social />
      <Name />
      <Card />
    </section>
  );
}

export default Home;
