import React from 'react'
import './Body.css'

const Card = (props) => {
  return (
    <div className='container'>
      <h1>{props.content}</h1>
      <p>{props.name}</p>
    </div>
  )
}

export default Card
