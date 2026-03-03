import { Link, useLocation } from "react-router-dom";
import "../CSS/Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo">
          Student Management App
        </Link>

        <nav className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-item active" : "nav-item"}
          >
            Home
          </Link>

          <Link
            to="/add-student/-1"
            className={
              location.pathname.includes("/add-student/-1")
                ? "nav-item active"
                : "nav-item"
            }
          >
            Add Student
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;