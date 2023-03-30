import React, { useContext } from 'react'
import { CartaList} from '../components'
import { CartaContext } from '../context/CartaContext'

export const HomePage = () => {

  const {onClickLoadMore} = useContext(CartaContext)

  return (
    <>
    <CartaList />

    <div className="container-btn-load-more container">
            <button className='btn-load-more' onClick={onClickLoadMore}>
                Ver más
            </button>
     </div>
    
    </>
  
  )
}
