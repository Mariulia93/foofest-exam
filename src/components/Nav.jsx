import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link className="logo" to="/">
        FOOFEST
      </Link>
      <ul>
        <li>
          <Link to="/tickets">TICKETS</Link>
        </li>
        <li>
          <Link to="/schedule">SCHEDULE</Link>
        </li>
        <li>
          <Link to="/info">INFO</Link>
        </li>
      </ul>
    </nav>
  );
}
