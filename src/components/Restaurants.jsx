import React from 'react'
import Restaurant from './Restaurant'

function Restaurants(props) {
  return (
    <div className="container divider">
            <div className="cards">
                {props.restaurants.map((restaurant)=>(
                  <Restaurant key={restaurant.name} restaurant={restaurant}/>
                ))}
            </div>
        </div>
  )
}

export default Restaurants