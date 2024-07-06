import logo from "../../assets/Logo.svg"
import "../Header/style.css"
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu = ()=>{
  setMenuOpen(!menuOpen);
 }

 return (
    <header className={`navbar ${menuOpen ? "open" : ""}`}>
      <img src={logo} alt="Little-Lemon" loading="lazy"></img>
      <div className="mobile-nav" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <ul className={`pageLinks ${menuOpen ? "visible" : ""}`}>
            <li> <Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li> <Link to="/bookings">Reservations</Link></li>
            <li><a href="#orderOnline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </header>
 );

}

export default Header;