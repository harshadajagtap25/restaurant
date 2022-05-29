import React from "react";
import styles from "./Restaurant.module.css";
function RestaurantDetails({ e }) {
  return (
    <div className={styles.restro1}>
      <div className={styles.restaurant}>
        <img className={styles.restroImg} src={e.img}></img>

        <div className={styles.info}>
          <h1>{e.name} </h1>
          <p>{e.categories.join(", ")} </p>
          <p>Cost &#8377;{e.cost} for two</p>
          <p>Will be reach in {e.reach_time}min</p>
        </div>
        <div className={styles.ratings}>
          <p>{e.rating}</p>
          <p>{e.totalVotes} votes</p>
          <p>{e.reviews} reviews</p>
        </div>
      </div>
      <div className={styles.payment_methods}>
        <p>  {"Acceptes "}
          <span>{e.payment_methods.upi ? "UPI, " : null}
          {e.payment_methods.cash ? "Cash, " : null}
          {e.payment_methods.card ? "Card" : null}</span>
          {" Only"}
        </p>
      </div>
    </div>
  );
}

export default RestaurantDetails;
