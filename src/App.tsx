import { useState, useEffect } from "react";
import CoffeeCard from "./components/coffee-card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");

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

  const displayedCoffees =
    currentTab === "all" ? data : data.filter((coffee) => coffee.available);

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
            <div
              className={
                currentTab == "all" ? "content-tab selected-tab" : "content-tab"
              }
              onClick={() => setCurrentTab("all")}
            >
              All Products
            </div>
            <div
              className={
                currentTab == "available"
                  ? "content-tab selected-tab"
                  : "content-tab"
              }
              onClick={() => setCurrentTab("available")}
            >
              Available Now
            </div>
          </div>
          <div className="coffee-selection-container">
            {displayedCoffees.length > 0
              ? displayedCoffees.map((coffee) => (
                  <CoffeeCard coffee={coffee} key={coffee.id} />
                ))
              : "Nothing here yet..."}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
