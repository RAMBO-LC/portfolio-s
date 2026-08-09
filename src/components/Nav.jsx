import { Link } from "react-router-dom";
import "./Home.css";

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
