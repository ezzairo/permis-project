import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">RouteWise</Link>

      <div className="nav-links">
        <Link to="/profile" className="nav-avatar">JD</Link>
        <button className="login-btn">Se connecter</button>
        <button className="register-btn">S'inscrire</button>
      </div>
    </nav>
  )
}