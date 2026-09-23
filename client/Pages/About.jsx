import { useEffect, useState } from "react";
import {
  FaDiscord,
  FaDocker,
  FaEdge,
  FaGithub,
  FaNodeJs,
  FaPython
} from "react-icons/fa";
import "./About.css";

const NAME = "Raj Ambolikar";

export default function About() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 10);
    return () => clearInterval(id);
  }, []);

  let hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return (
    <div className="page">
      <h2 className="heading">About Me </h2>

      <div className="rambo">
        <div className="card photo">
          <div className="avatar">
            <span>
              {NAME.split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          </div>
        </div>

        <div className="card intro">
          <h1>
            <span className="im">I'm</span> <span className="name">{NAME}</span>
          </h1>
          <p>
            Started coding a few years ago, exploring the edges of tech.
            Building products, contributing to open source. Always curious,
            always building.
          </p>
        </div>

        <div className="card skills">
          <div className="label-row">
            <p className="label">Skills I'm Learning.</p>
          </div>
          <ul>
            <li>Full Stack Developer</li>
            <li>Blockchain Engineer</li>
            <li>AI/ML Enthusiast</li>
            <li>Technical Blogger</li>
          </ul>
        </div>

        <div className="card clock">
          <div className="time">
            <span>
              {String(hours).padStart(2, "0")}:{minutes}
            </span>
            <span className="ampm">{ampm}</span>
          </div>
        </div>

        <div className="card lore">
          <p className="label">Lore.</p>
          <p>
            Among developers, known as <b>Rambo4code</b>. A personal insignia
            carried since the genesis of a development journey.
          </p>
        </div>

        <div className="card stack">
          <p className="label">Stack.</p>
          <div className="stack-icons">
            <FaEdge title="Chrome" className="c-edge" />
            <FaNodeJs title="Node.js" className="c-node" />
            <FaGithub title="GitHub" />
            <FaDiscord title="Discord" className="c-discord" />
            <FaDocker title="Docker" className="c-docker" />
            <FaPython className=".c-python/>
          
          </div>
        </div>
      </div>
    </div>
  );
}
