import React from 'react'
import "./styles/Card.css"

function Card(props) {
  return (
 <>
    <div className="card-box">
        <div className="card">
    
      <li>{props.item} <button onClick={(e)=>{props.deleteList(props.index)}}>-</button></li>
    </div>
    </div>
  
 </>
  )
}

export default Card