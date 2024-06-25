import "../Chicago/style.css"
import pic1 from "../../assets/Mario and Adrian A.jpg"
import pic2 from "../../assets/Mario and Adrian b.jpg"
const Chicago = () => {
 
 return (
    <section className="chicago">
        <div className="details">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
               To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort
               to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
        </div>
        <div className="imgs">
        <img src={pic1} alt="Mario & Adrian" className="pic1"></img>
        <img src={pic2} alt="Mario & Adrian" className="pic2"></img>
        </div>
        

    </section>
 );

}

export default Chicago;