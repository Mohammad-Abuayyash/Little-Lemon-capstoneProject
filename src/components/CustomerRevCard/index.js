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
            <h4>{stars[rating]}</h4>
            <img src={customerImg} alt={customerName}></img>
            <h5>{customerName}</h5>
            <p>{testimonial}</p>
        </div>
    );

}

export default CustomerRevCard;