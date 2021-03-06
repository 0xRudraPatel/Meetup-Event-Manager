import { Link } from "react-router-dom";

import NavStyle from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={NavStyle.header}>
      <div className={NavStyle.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
