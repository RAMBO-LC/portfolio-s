import "./About.css";

import { useEffect, useState } from "react";
import LogoLoop from "../fun-components/Stack/LogoLoop";
import SplitFlapText from "../fun-components/SplitFlap/SplitFlap";
import { SiDiscord } from "react-icons/si";

const DEVICON_BASE = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons";

import { Zed } from '@thesvg/react';

// Zed is an SVG component, so it must be passed as a `node` logo item —
// not called raw into the array (a raw element has neither `src` nor
// `node`, so LogoLoop would render a broken <img src={undefined}>).
function ZedLogo({ height = 44 } = {}) {
  return <Zed variant="light" style={{ height, width: 'auto', display: 'block' }} />;
}



// Dark monochrome logos are invisible on the #0a0a0a cards, so render them
// as `node` items with an invert filter (see .logo-invert in About.css).
const darkLogo = (src, title) => ({
  node: (
    <img
      src={src}
      alt={title}
      title={title}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="logo-invert"
    />
  ),
  title,
  ariaLabel: title,
});

const imgLogo = (src, title) => ({ src, title, alt: title });

// Fisher-Yates shuffle - returns a new shuffled array, doesn't mutate the original
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const c_STACK_LOGOS = [
  imgLogo(`${DEVICON_BASE}/nodejs/nodejs-original.svg`, "Node.js"),
  darkLogo(`${DEVICON_BASE}/github/github-original.svg`, "GitHub"),
  // Brand-blue Discord (react-icons simple-icons glyph, #5865F2) rendered
  // as a `node` so no invert filter touches it.
  { node: <SiDiscord color="#5865F2" size={40} title="Discord" />, title: "Discord", ariaLabel: "Discord" },
  imgLogo(`${DEVICON_BASE}/typescript/typescript-original.svg`, "TypeScript"),
  imgLogo(`${DEVICON_BASE}/python/python-original.svg`, "Python"),
  imgLogo(`${DEVICON_BASE}/javascript/javascript-original.svg`, "JavaScript"),
  imgLogo(`${DEVICON_BASE}/react/react-original.svg`, "React"),
  darkLogo(`${DEVICON_BASE}/vercel/vercel-original.svg`, "Vercel"),
  imgLogo(`${DEVICON_BASE}/docker/docker-original.svg`, "Docker"),
  darkLogo(`${DEVICON_BASE}/apple/apple-original.svg`, "macOS"),
  imgLogo(`${DEVICON_BASE}/linux/linux-original.svg`, "Linux"),
  imgLogo(`${DEVICON_BASE}/windows11/windows11-original.svg`, "Windows"),
  imgLogo(`${DEVICON_BASE}/git/git-original.svg`, "Git"),

  { node: <ZedLogo height={44} />, title: "Zed", ariaLabel: "Zed" },

  imgLogo(`${DEVICON_BASE}/figma/figma-original.svg`, "Figma"),


];

const l_STACK_LOGOS = [
  imgLogo(`${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`, "Tailwind CSS"),
  imgLogo(`${DEVICON_BASE}/postgresql/postgresql-original.svg`, "PostgreSQL"),
  imgLogo(`${DEVICON_BASE}/mongodb/mongodb-original.svg`, "MongoDB"),
  imgLogo(`${DEVICON_BASE}/redis/redis-original.svg`, "Redis"),
  imgLogo(`${DEVICON_BASE}/vim/vim-original.svg`, "Vim"),
  imgLogo(`${DEVICON_BASE}/kubernetes/kubernetes-plain.svg`, "Kubernetes"),
  imgLogo(`${DEVICON_BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, "AWS"),
  imgLogo(`${DEVICON_BASE}/graphql/graphql-plain.svg`, "GraphQL"),
];

export default function About() {
  // Random order on mount, then re-shuffled every RESHUFFLE_MS.
  // Safe mid-animation: a reshuffle is a permutation of the same items,
  // so the total sequence width (and the loop offset math) is unchanged —
  // logos just swap places while the marquee keeps scrolling.
  const [shuffledLearning, setShuffledLearning] = useState(() => shuffleArray(l_STACK_LOGOS));
  const [shuffledStack, setShuffledStack] = useState(() => shuffleArray(c_STACK_LOGOS));

  useEffect(() => {
    const RESHUFFLE_MS = 8000;
    const id = setInterval(() => {
      setShuffledLearning(shuffleArray(l_STACK_LOGOS));
      setShuffledStack(shuffleArray(c_STACK_LOGOS));
    }, RESHUFFLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="about" className="page">
      <h2 className="heading">About Me</h2>

      <div className="rambo">
        <div className="card intro">
          <h1>
            <span className="name">
              <SplitFlapText words={["I'm Raj Ambolikar", "I'm Rambo4code"]} />
            </span>
          </h1>
          <p>
            I build web apps with JavaScript, TypeScript, and Python —React up front, Node behind it.
            Currently digging into backend
            systems — Postgres, Redis, AWS — and working toward open-source
            contributions.
          </p>
        </div>

        <div className="card skills">
          <p className="label">Currently Learning.</p>
          <LogoLoop
            logos={shuffledLearning}
            direction="left"
            logoHeight={44}
            gap={36}
            speed={60}
            fadeOut
            fadeOutColor="#0a0a0a"
            ariaLabel="Currently learning"
          />
        </div>

        <div className="card lore">
          <p className="label">Lore.</p>
          <p>
            Known as <b>Rambo4code</b> — the handle I've carried since day
            one.
          </p>
        </div>

        <div className="card stack">
          <p className="label">Current Stack.</p>
          <LogoLoop
            logos={shuffledStack}
            direction="right"
            logoHeight={44}
            gap={36}
            speed={60}
            fadeOut
            fadeOutColor="#0a0a0a"
            ariaLabel="Current tech stack"
          />
        </div>
      </div>
    </div>
  );
}