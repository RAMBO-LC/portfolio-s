import "./styles.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <button onClick={() => home.scrollIntoView({ behavior: "smooth" })}>
            .home
          </button>
        </li>
        <li>
          <button onClick={() => about.scrollIntoView({ behavior: "smooth" })}>
            .about
          </button>
        </li>
        <li>
          <button onClick={() => work.scrollIntoView({ behavior: "smooth" })}>
            .work
          </button>
        </li>
      </ul>
    </div>
  );
}
