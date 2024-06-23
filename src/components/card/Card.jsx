import React from 'react'
import './Card.css'
import foodDel from '../../assets/foodDel.png'
import crypto from '../../assets/crypto.png'
import gemini from '../../assets/gemini.png'
import wrapper from '../../assets/wrapper.png'
import vaugesync from '../../assets/vaugesync.png'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="image">
            <img src={props.image} alt="" />
        </div>

        <div className="card-title">
            <h3>{props.name}</h3>
        </div>

        <div className="card-description">
            <p>{props.description}</p>
        </div>

        <div className="card-buttons">
          <a href={props.demo}><button>Demo</button></a>
          <a href={props.code}><button>Code</button></a>
        </div>
    </div>
  )
}

export default Card