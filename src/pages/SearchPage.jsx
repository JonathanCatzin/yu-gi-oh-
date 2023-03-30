import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardCarta } from '../components';
import { CartaContext } from '../context/CartaContext';

export const SearchPage = () => {
	const location = useLocation();

	const { globalCartas } = useContext(CartaContext);

	const filteredCartas = globalCartas.filter(carta =>
		carta.name.includes(location.state.toLowerCase())
	);

	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredCartas.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-carta container'>
				{filteredCartas.map(carta => (
					<CardCarta carta={carta} key={carta.id} />
				))}
			</div>
		</div>
	);
};
