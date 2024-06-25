import "../FoodCard/style.css"
const FoodCard = ({imageUrl, title, price, description}) => {

 return (
    <div className="foodCard">
       <img src={imageUrl}></img>
       <div className="foodCardDetails">
         <div className="foodInfo">
            <h3>{title}</h3>
            <span>{price}</span>
         </div>
        <p>{description}</p>
       </div>
       <div className="orderButton">
            <button type="button">Order a delivery</button>
            <img src=""></img>
        </div>
    </div>
 );

}

export default FoodCard;