import React from 'react'

function Card(props) {
  return (
    <div className="mainCard">
      <img className="mainImg" src={props.images} alt="" /> 
    </div>
  )
}

export default Card