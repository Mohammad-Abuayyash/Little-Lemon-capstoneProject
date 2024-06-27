import "../CallToAction/style.css"
import { useNavigate } from "react-router-dom";
import RestaFood from "../../assets/restauranfood.jpg"
const CallToAction = () => {
    const navigate= useNavigate();

 return (
    <section className="callToAction">
        <div className="details">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned 
                Mediterranean restaurant,
                focused on traditional
                recipes served with a modern
                twist.
            </p>
            <button onClick={()=>{navigate("/bookings")}}>Reserve a table</button>
        </div>
        <img src={RestaFood} alt="restauranfood" loading="lazy"></img>
    </section>
 );

}

export default CallToAction;