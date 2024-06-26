import "../CustomerRevCard/style.css"

const CustomerRevCard = ({rating, customerImg, customerName, testimonial}) => {
    const stars = {
        1: "★☆☆☆☆",
        2: "★★☆☆☆",
        3: "★★★☆☆",
        4: "★★★★☆",
        5: "★★★★★",
      };
    return (
        <div className="custCard">
            <div className="custInfo">
                <img src={customerImg} alt={customerName} loading="lazy"></img>
                <h5>{customerName}</h5>
            </div> 
            <h4>{stars[rating]}</h4>
            <p>{testimonial}</p>
        </div>
    );

}

export default CustomerRevCard;