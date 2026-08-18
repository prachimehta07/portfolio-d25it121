import { NavLink } from "react-router-dom";

function NavBar({ darkMode, onToggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
          Home
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? "active-link" : ""}>
        Tasks
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
          Contact
        </NavLink>
      </div>

      <button className="theme-toggle" onClick={onToggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default NavBar;