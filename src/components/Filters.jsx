import React from 'react'

const Filters = ({filters,currentFilteredBy,updateFilter}) => {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
               {Object.entries(filters).map(([key,value])=>(
                   <div key={key} className={'restaurant-option ${currentFilteredBy== value ? "underline" :"" } '}
                   onClick={()=>updateFilter(key)}
                   >{value}</div>
               ))} 
                
            </div>
        </div>
  )
}

export default Filters