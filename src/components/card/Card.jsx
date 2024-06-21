import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
        <div className="image">
            <img src="https://t4.ftcdn.net/jpg/05/29/61/37/360_F_529613760_ZN7wI9c62MyPeFC8ioliQ2wrVohVuRey.jpg" alt="" />
        </div>

        <div className="card-title">
            <h3>Monkey</h3>
        </div>

        <div className="card-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet modi, fuga voluptatum aut iste aliquam minima alias est recusandae excepturi repellendus illo sunt ipsum ipsa eos odio error doloremque.</p>
        </div>
    </div>
  )
}

export default Card