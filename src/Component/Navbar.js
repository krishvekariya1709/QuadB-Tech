import React from "react";
import { Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TVMAZE </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/StartingAll">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Girl">Girl</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Boys">Boys</Link>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>
    </div>
  );
}
