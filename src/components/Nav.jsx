import { Link } from "react-router-dom";
import "./styles.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">.home</Link>
        </li>
        <li>
          <Link to="/about">.about</Link>
        </li>
        <li>
          <Link to="/work">.work</Link>
        </li>
      </ul>
    </div>
  );
}
