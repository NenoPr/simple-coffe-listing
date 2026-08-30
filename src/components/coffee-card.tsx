import "../App.css";
import type { Coffee } from "../types/Coffe";
import Star from "../assets/Star.svg";
import StarFill from "../assets/Star_fill.svg";

type CoffeeCardProps = {
  coffee: Coffee;
};

function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <div className="coffee-card">
      <img src={coffee.image} alt={coffee.name} />
      <div className="coffee-card-name-holder">
        <p className="coffee-name">{coffee.name}</p>
        <p className="coffee-price">{coffee.price}</p>
      </div>
      <div className="coffee-card-rating">
        <div className="rating-container">
          <img
            className="star-image"
            src={coffee.rating ? StarFill : Star}
            alt="star"
          />
          <p className="coffee-rating">{coffee.rating}</p>
          <p>({coffee.votes} votes)</p>
        </div>
        <p className="sold-out">{coffee.available ? "" : "Sold Out"}</p>
      </div>
    </div>
  );
}

export default CoffeeCard;
