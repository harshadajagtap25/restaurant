import { useState } from "react";
import "./App.css";
import Filters from "./components/Filters";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";
// import RestaurantApp from './components/RestaurantApp';
import navbar from "./data/navbar.json";
import offers from "./data/offer.json";
import restaurants from "./data/restaurant.json";

const filters = {
  1: "Cost Hight To Low",
  2: "Cost Low To High",
  3: "Ratings",
  4: "DeliveryTime",
  5: "Relevance",
};
function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setdata] = useState(restaurants);

  const updateFilter = (newFilter) => {
    switch (newFilter) {
      case "1": {
        setFilterBy(1);
        let newSortedVal = data.sort((a, b) => {
          return Number(b.cost_for_two) - Number(a.cost_for_two);
        });
        setdata(newSortedVal);
        break;
      }
      case "2": {
        setFilterBy(2);
        let newSortedVal = data.sort((a, b) => {
          return Number(a.cost_for_two) - Number(b.cost_for_two);
        });
        setdata(newSortedVal);
        break;
      }
      case "3": {
        setFilterBy(3);
        let newSortedVal = data.sort((a, b) => {
          return Number(b.rating) - Number(a.rating);
        });
        setdata(newSortedVal);
        break;
      }
      case "4": {
        setFilterBy(4);
        let newSortedVal = data.sort((a, b) => {
          return Number(b.delivery_time) - Number(a.delivery_time);
        });
        setdata(newSortedVal);
        break;
      }
      case "5": {
        setFilterBy(5);
        let newSortedVal = data.sort((a, b) => {
          return Number(b.reviews) - Number(a.reviews);
        });
        setdata(newSortedVal);
        break;
      }
      default: {
        setdata(restaurants);
        break;
      }
    }
  };
  return (
    <div className="App">
      <Navbar {...navbar.location} />
      <section className="near-you">
        <Offers offers={offers} />
        <Filters
          filters={filters}
          currentFilteredBy={filterBy}
          updateFilter={updateFilter}
        />
      </section>

      <Restaurants restaurants={data} />
    </div>
  );
}

export default App;
