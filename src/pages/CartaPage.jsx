import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { CartaContext } from '../context/CartaContext';
import { primerMayuscula } from '../helper/helper';

export const CartaPage = () => {
  const { getCartaByID } = useContext(CartaContext)

  const [loading, setLoading] = useState(true);
  const [carta, setCarta] = useState({});

  const { id } = useParams();

  const fetchCarta = async id => {
    const data = await getCartaByID(id);
    setCarta(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCarta(id)
  }, []);

  return (
    <main className='container main carta'>
      {
        loading ? (
          <Loader />
        ) :
          (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-4 container-img-carta">
                    <img src={`https://images.ygoprodeck.com/images/cards/${id}.jpg`}
                      alt="carta grande" />


                  </div>

                  <div className="col-8">
                    <div className="container-info-carta">
                      <div className="row">
                        <div className="name">
                          <h1>{carta.name}</h1>
                        </div>
                      </div>

                      <div className="row p-1">
                        <div className="col-md-3 badge bg-secondary m-1">
                          <div className="box ">
                            <p>Tipo: {carta.type} </p>
                          </div>
                        </div>
                        <div className="col-md-3 badge bg-secondary m-1 ">
                          <div className="box">
                            Atributo: {carta.attribute}
                          </div>
                        </div>
                        <div className="col-md-3 badge bg-secondary m-1">
                          <div className="box">
                            <p>Raza: {carta.race}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row p-1">
                        <div className="col-md-3 badge bg-secondary m-1">
                          <div className="box">
                            <p>Nivel: {carta.level}</p>
                          </div>
                        </div>
                        <div className="col-md-3 badge bg-secondary m-1">
                          <div className="box">
                            <p>ATK: {carta.atk}</p>
                          </div>
                        </div>
                        <div className="col-md-3 badge bg-secondary m-1">
                          <div className="box">
                            <p>DEF: {carta.def}</p>
                          </div>
                        </div>
                      </div>
                      <div className="row p-1">
                        <div className="col-md-3 badge bg-secondary m-1">
                          <div className="box">
                            <p>Arquetipo: {carta.archetype}</p>
                          </div>
                        </div>
                        <div className="col-md-3 badge bg-secondary m-1 ">
                          <div className="box">
                            Tipo de cuadro: {carta.frameType}
                          </div>
                        </div>
                        <div className="col-md-3 badge bg-secondary m-1">
                          <div className="box">
                            
                          </div>
                        </div>
                      </div>

                    </div>

                    <h2>Juego de cartas</h2>
                    <ul>
                      {carta.card_sets?.map((set) => (
                        <li key={set.set_code}>
                          {set.set_name} - {set.set_rarity}
                        </li>
                      ))}
                    </ul>
                    <h2>Precio</h2>
                    <ul>
                      {carta.card_prices?.map((price) => (
                        <li key={price.ebay_price}>
                          eBay: ${price.ebay_price} - TCGPlayer: ${price.tcgplayer_price}
                        </li>
                      ))}
                    </ul>

                    <h2>Texto Carta</h2>
                    <p>{carta.desc}</p>

                  </div>

                </div>
              </div>
            </>
          )
      }
    </main>
  );
}
