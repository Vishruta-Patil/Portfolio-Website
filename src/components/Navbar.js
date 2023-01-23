import { useEffect } from "react";
import { Link } from "react-router-dom";
import { navData } from "../data/nav";

export function Navbar({ nav, setNav }) {
  console.log(window.location.pathname);
  const linkHandler = (pathName) => {
    if (pathName === window.location.pathname) 
        setNav(!nav);
  };

  return (
    <header class={`header ${nav ? "active" : ""}`}>
      <div class="container">
        <div class="row flex-end">
          <button class="nav-toggler" onClick={() => setNav(!nav)}>
            <span></span>
          </button>
          <nav class="nav">
            <div class="nav-inner">
              <ul>
                {navData.map((nav, ind) => (
                  <li key={ind} onClick={() => linkHandler(nav.link)}>
                    <Link to={nav.link} class="nav-item link-item">
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}


