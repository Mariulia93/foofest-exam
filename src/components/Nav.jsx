import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div id="navLogo">
        <Link to="/">FOOFEST</Link>
      </div>
      <ul>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
    </nav>
  );
}
