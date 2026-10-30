import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const isPermisCamion = location.pathname === '/permis/camion';

  return (
    <nav className="navbar">
      <Link to="/" className="logo">RouteWise</Link>

      <div className="nav-links">
        {isPermisCamion ? (
          <Link to="/profile" className="nav-avatar">JD</Link>
        ) : (
          <>
            <button className="login-btn">Se connecter</button>
            <button className="register-btn">S'inscrire</button>
          </>
        )}
      </div>
    </nav>
  )
}