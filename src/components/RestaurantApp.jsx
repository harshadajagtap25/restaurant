// import React, { useState } from "react";
// import RestaurantDetails from "./RestaurantDetails";
// import styles from "./Restaurant.module.css";
// import Navbar from "./Navbar";
// import Offers from "./Offers";
// import Filters from "./Filters";

// let sortingInfo = ["L2H", "H2L"];
// function RestaurantApp({ data }) {
//   const [sortByPrice, setsortByPrice] = useState("L2H");

//   const changeSortBy = () => {
//     if (sortByPrice == "L2H") setsortByPrice("H2L");
//     else setsortByPrice("L2H");
//   };
//   return (
//     <div>
//       <div>
//         {"Sort by Ratings:  "}
//         {/* <select
//           onChange={(e) => {
//             sortByRating(e.target.value);
//           }}
//         >
//           <option value={1}>1</option>
//           <option value={2}>2</option>
//           <option value={3}>3</option>
//           <option value={4}>4</option>
//         </select> */}
//         {/* <button onClick={changeSortBy()} value = {"L2H"}>l2h</button>
//         <button onClick={changeSortBy()} value = {"H2L"}>h2l</button> */}
//       </div>
//       {/* <div className={styles.container}>
//         {data.map((e) => (
//           <div>
//             <RestaurantDetails key={e.name} e={e} />
//           </div>
//         ))}
//       </div> */}
//       {/* <Navbar/>
//       <Offers/>
//       <Filters/>
//       <RestaurantDetails/> */}
//     </div>
//   );
// }

// export default RestaurantApp;
