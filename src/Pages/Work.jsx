import "./Work.css";

export default function Work() {
  const projects = [
    {
      title: ".portfolio",
      description: "Interactive personal portfolio built with React, Three.js, and Vite.",
    },
    {
      title: ".web-apps",
      description: "Collection of high-performance modern web applications & dynamic UI components.",
    },
    {
      title: ".open-source",
      description: "Open source contributions, experiments, and 3D visual graphics.",
    },
  ];

  return (
    <section className="work-container">
      <h2>.work</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
