import { useState, useEffect } from "react";
import "../App.css";

function CoffeeCard({ coffee }) {
  return (
    <div className="coffee-card">
      <img src={coffee.image} alt={coffee.name} />
      <div className="coffee-card-name-holder">
        <p className="coffee-name">{coffee.name}</p>
        <p className="coffee-price">{coffee.price}</p>
      </div>
      <div className="coffee-card-rating">
        <img
          className="star-image"
          src={coffee.rating ? "/Star_fill.svg" : "/Star.svg"}
          alt="star"
        />
        <p className="coffee-rating">{coffee.rating}</p>
        <p>({coffee.votes} votes)</p>
      </div>
    </div>
  );
}

export default CoffeeCard;
