import { useState, useEffect } from "react";
import StarFill from "../public/Star_fill.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",
    )
      .then((response) => response.json())
      .then((data) => {
        // Use the data here
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        // Handle any errors here
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        <div className="content-container">
          <h1>Our Collection</h1>
          <p className="description">
            Introducing our coffee collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="content-tabs">
            <div className="content-tab">All Products</div>
            <div className="content-tab">Available Now</div>
          </div>
          <div className="coffee-selection-container">
            {data
              ? data.map((coffee) => {
                  return (
                    <div className="coffee-card" key={coffee.id}>
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
                })
              : "Nothing here yet"}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
