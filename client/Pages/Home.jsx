import { Suspense, lazy } from "react";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import "./Home.css";
import Name from "../components/Name.jsx";
import Social from "../components/Social.jsx";

// Heavy three.js scenes: lazy-load so the initial bundle stays small.
// They render below/around hero content and pop in when ready.
const Circle = lazy(() => import("../background/Circle.jsx"));
const Card = lazy(() => import("../fun-components/Card/Card.jsx"));

function Home() {
  return (
    <section id="home" className="hero-container">
      <ErrorBoundary>
        <Suspense fallback={<div className="hero-fallback" aria-hidden="true" />}>
          <Circle />
        </Suspense>
      </ErrorBoundary>
      <Social />
      <Name />
      <ErrorBoundary>
        <Suspense fallback={<div className="hero-fallback" aria-hidden="true" />}>
          <Card />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}

export default Home;
