import "../Footer/style.css"
import Logo from "../../assets/whiteLogo.png"
const Footer = () => {

 return (
    <footer>
      <div className="socials">
        <img src={Logo} alt="Restaurant Food" loading="lazy"/>
        {/* <img/> */}
      </div>
      <div className="cols">
      <section className="column">
       <h4>Navigation</h4>
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
       <h4>Open Hours</h4>
       <ul>
            <li>Monday - Friday<br></br>8am - 10pm</li>
            <li>Sunday & Saturday<br></br>10am - 4pm</li>
            <li>Online Ordering<br></br>11am - 9pm</li>

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
      </div>
    
    </footer>
 );

}

export default Footer;