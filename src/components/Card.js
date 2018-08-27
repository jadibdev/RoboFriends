import React from 'react'
import 'tachyons'
import './Card.css'

const Card = ({name, email, id}) => {
  return (
    <div className='tc w4 bg-light-green dib br3 pa2 ma2 grow'>
      <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
