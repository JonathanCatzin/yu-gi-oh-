import React from 'react'
import { Link } from 'react-router-dom'

export const CardCarta = ({ carta }) => {
  return (

    <Link to ={`/carta/${carta.id}`}  className='card-carta'>
            <div className='card-img'>
                <img
					src={`https://images.ygoprodeck.com/images/cards_cropped/${carta.id}.jpg`}
					alt={`Carta ${carta.name}`}
				/>
			</div>
			<div className='card-info'>
				<h3>{carta.name}</h3>
				<div className='card-types'>
				<span key={carta.type} className='type'>
					{carta.type}
				</span>
				</div>
			</div>

        </Link>
  )
}
