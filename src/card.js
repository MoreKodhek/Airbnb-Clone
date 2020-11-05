import React from 'react';
import './card.css'

function Card({ src, title, description, price}) {
     //Think of alternatives that will go in here so that it can match up with photographers
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h3>{title}</h3>
                <h5>{description}</h5>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Card
