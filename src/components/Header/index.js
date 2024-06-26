import logo from "../../assets/Logo.svg"
import "../Header/style.css"
import { Link } from "react-router-dom";

const Header = () => {

 return (
    <header>
      <img src={logo} alt="Little-Lemon" loading="lazy"></img>
      <nav>
        <ul className="pageLinks">
            <li> <Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li> <Link to="/bookings">Reservations</Link></li>
            <li><a href="#orderOnline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
 );

}

export default Header;