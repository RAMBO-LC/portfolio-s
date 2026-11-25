import "./styles.css";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul>
        <li>
          <button type="button" onClick={() => scrollToSection("home")}>
            .home
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection("about")}>
            .about
          </button>
        </li>
        <li>
          <div className="workNav">
            <button type="button" onClick={() => scrollToSection("work")}>
              .work
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
