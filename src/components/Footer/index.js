import "../Footer/style.css"
import restaurant from "../../assets/restaurant.jpg"
const Footer = () => {

 return (
    <footer>
     <img src={restaurant} alt="Restaurant Food"/>
     <div className="footer-info">
     <section className="column">
       <h4>Little<br/>Lemon</h4>
       <ul className="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderOnline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
     </section>
     <section className="column">
       <h4>Contact us</h4>
       <ul className="links">
            <li><address>
                Little Lemon <br />
                331 E Chicago <br />
                LaSalle Street Chicago,
                <br />
                Illinois 60602 <br />
                USA
              </address></li>
            <li><a href="tel:+551199999999" target="_blank" rel="external">+55 11 9999-9999</a></li>
            <li><a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
              ></a>
                contact@littlelemon.com</li>
        </ul>
     </section>
     <section className="column">
       <h4>Social Media Links</h4>
       <ul className="links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
     </section>
     </div>
    </footer>
 );

}

export default Footer;