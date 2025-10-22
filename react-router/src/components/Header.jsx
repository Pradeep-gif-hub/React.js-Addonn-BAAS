import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">React Router DOM</div>
      <nav className="nav">
        <NavLink 
                    to="/" 
                    className="nav-link" 
                    style={{ 
                    backgroundColor: "orange", 
                    borderRadius: "3px", 
                    color: "white", 
                    padding: "8px 16px", 
                    textDecoration: "none" 
                    }}
                    >
                  Home
        </NavLink>
        <NavLink 
                    to="/about" 
                    className="nav-link" 
                    style={{ 
                    backgroundColor: "orange", 
                    borderRadius: "3px", 
                    color: "white", 
                    padding: "8px 16px", 
                    textDecoration: "none" 
                    }}
                    >
                  About
        </NavLink>
        <NavLink 
                    to="/contact" 
                    className="nav-link" 
                    style={{ 
                    backgroundColor: "orange", 
                    borderRadius: "3px", 
                    color: "white", 
                    padding: "8px 16px", 
                    textDecoration: "none" 
                    }}
                    >
                  Contact
        </NavLink>
        <NavLink 
                    to="/github" 
                    className="nav-link" 
                    style={{ 
                    backgroundColor: "orange", 
                    borderRadius: "3px", 
                    color: "white", 
                    padding: "8px 16px", 
                    textDecoration: "none" 
                    }}
                    >
                  GitHub
        </NavLink>


      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
