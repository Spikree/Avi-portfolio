import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="image">
            <img src="https://t4.ftcdn.net/jpg/05/29/61/37/360_F_529613760_ZN7wI9c62MyPeFC8ioliQ2wrVohVuRey.jpg" alt="" />
        </div>

        <div className="card-title">
            <h3>{props.name}</h3>
        </div>

        <div className="card-description">
            <p>{props.description}</p>
        </div>

        <div className="card-buttons">
          <a href=""><button>Demo</button></a>
          <a href=""><button>Code</button></a>
        </div>
    </div>
  )
}

export default Card