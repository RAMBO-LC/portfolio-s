import "./styles.css";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <button onClick={() => scrollTo("home")}>.home</button>
        </li>
        <li>
          <button onClick={() => scrollTo("about")}>.about</button>
        </li>
        <li>
          <button onClick={() => scrollTo("work")}>.work</button>
        </li>
      </ul>
    </div>
  );
}