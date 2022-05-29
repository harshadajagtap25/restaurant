import React from 'react'

const Offers = (props) => {
  return (
    <section className="offers">
        <div className="container">
          {props.offers.map((e)=>(
             <img className="offer" src={e}/>
          ))}
            
        </div>
    </section>
  )
}

export default Offers