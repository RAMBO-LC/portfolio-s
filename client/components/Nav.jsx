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
          <button to="/about">.about</button>
        </li>
        <li>
          <button to="/work">.work</button>
        </li>
      </ul>
    </div>
  );
}
