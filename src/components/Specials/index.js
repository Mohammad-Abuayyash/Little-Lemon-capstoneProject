import "../Specials/style.css"
import FoodCard from "../FoodCard/index"
import greekSalad from "../../assets/greek salad.jpg"
import bruchetta from "../../assets/bruchetta.jpg"
import lemonDessert from "../../assets/lemon dessert.jpg"
const Specials = () => {
 
 const greekSaladDesc = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.";   
 const bruchettaDesc = "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.";
 const lemonDessertDesc = "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.";
 
 return (
    <section className="specials">
        <div className="heading">
            <h2>This weeks specials!</h2>
            <button type="button">Online Menu</button>
        </div>
        <div className="foodCards">
            <FoodCard imageUrl={greekSalad} title="Greek Salad" price="$12.99" description={greekSaladDesc}/>
            <FoodCard imageUrl={bruchetta} title="Bruchetta" price="$5.99" description={bruchettaDesc}/>
            <FoodCard imageUrl={lemonDessert} title="Lemon Dessert" price="$5.00" description={lemonDessertDesc}/>
        </div>
    </section>
 );

}

export default Specials;