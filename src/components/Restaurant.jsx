import React from "react";

function Restaurant({restaurant}) {
  return (
    <div key={restaurant.id} className="card">
      <img width="254" height="160px" src={restaurant.img} />
      <div className="restaurant-details">
        <div className="restaurant-title">{restaurant.name}</div>
        <div className="restaurant-subtitle">
         {restaurant.categories.join(", ")}
        </div>
      </div>
      <div className="restaurant-info">
        <div className="restaurant-ratings">
          <i className="material-icons star-icon">star</i>{restaurant.rating}
        </div>
        .<div className="restaurant-delivery-timings">{restaurant.delivery_time}  MINS</div> .
        <div className="restaurant-cost-for-two">₹ {restaurant.cost_for_two} FOR TWO</div>
      </div>
      <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">{restaurant.offer.join(", ")}</span>
      </div>
    </div>
  );
}

export default Restaurant;
