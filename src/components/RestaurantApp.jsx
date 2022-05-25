import React from "react";
import RestaurantDetails from "./RestaurantDetails";
import styles from './Restaurant.module.css'

function RestaurantApp({data}) {

  return (
    <div className={styles.container}>
     {data.map((e)=>(
       <div>
         <RestaurantDetails key={e.name} e={e} />
       </div>
     ))}
    </div>
  );
}

export default RestaurantApp;
