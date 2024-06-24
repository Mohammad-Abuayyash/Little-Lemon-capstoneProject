import logo from "../../assets/Logo.svg"
import "../Header/style.css"
const Header = () => {

 return (
    <header>
      <img src={logo} alt="Little-Lemon"></img>
      <nav>
        <ul className="pageLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderOnline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
 );

}

export default Header;