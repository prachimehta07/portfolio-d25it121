import { Link, NavLink, useNavigate } from "react-router-dom";

function NavBar({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? "active-link" : ""}>Tasks</NavLink>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        {isLoggedIn ? (
        <button className="theme-toggle" onClick={handleLogout}>Logout</button>
        ) : ( 
        <NavLink to="/login" className="theme-toggle">Login</NavLink>)}
        <button className="theme-toggle" onClick={onToggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;