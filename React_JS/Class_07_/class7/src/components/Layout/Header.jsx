import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const activeLinkCart = useMemo(
    () => location.pathname.includes("/cart"),
    [location.pathname]
  );

  console.log(location);

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  !activeLinkForm ? "active" : ""
                }`}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLinkForm ? "active" : ""
                }`}
                to={"/form"}
              >
                Add advertisment
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
