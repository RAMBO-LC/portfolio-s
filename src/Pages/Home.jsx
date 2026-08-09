import Circle from "../background/Circle.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import "../components/Home.css";
import Name from "../components/Name.jsx";
import Social from "../components/Social.jsx";
import Card from "../fun-components/Card.jsx";
import Nav from "../components/Nav.jsx";

function Home() {
  return (
    <>
      <Nav />
      <section className="hero-container">
        <ErrorBoundary>
          <Circle />
        </ErrorBoundary>
        <Social />
        <Name />
        <ErrorBoundary>
          <Card />
        </ErrorBoundary>
      </section>
    </>
  );
}

export default Home;
