import { useRef } from "react";
import Circle from "../background/Circle.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import "./Home.css";
import Name from "../components/Name.jsx";
import Social from "../components/Social.jsx";
import Card from "../fun-components/Card.jsx";

function Home() {
  const nameRef = useRef(null);

  return (
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
  );
}

export default Home;
