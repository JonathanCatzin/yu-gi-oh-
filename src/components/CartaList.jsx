import React, { useContext } from 'react'
import { CartaContext } from '../context/CartaContext'
import { CardCarta } from './CardCarta'
import { Loader } from './Loader';

export const CartaList = () => {


    const {allCartas, loading, filteredCartas}  = useContext(CartaContext)
  return (

    <>
                
    {loading ? (
        <Loader />
    ) : (
        <div className='card-list-carta container'>
                <>
                    {allCartas.map(carta => (
                        <CardCarta carta={carta} key={carta.id} />
                    ))}
                </>
        </div>
    )}
				
    </>

  )
}

{/* <>

</> */}
