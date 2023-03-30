import React, { useContext } from 'react';
import { Link, Outlet , useNavigate } from 'react-router-dom';
import { CartaContext } from '../context/CartaContext';

export const Navigation = () => {

    const { onInputChange, valueSearch, onResetForm } =
		useContext(CartaContext);

        const navigate = useNavigate();

        const onSearchSubmit = e => {
            e.preventDefault();
            navigate('/search', {
                state: valueSearch,
            });
    
            onResetForm();
        };

    return (
        <>
        <header class="container">
            
        <Link to='/' className='logo'>
                <img 
                src="https://ygoprodeck.com/cdn-cgi/image/width=140/https://images.ygoprodeck.com/images/assets/ygoprodeck_header_logo.png?v=1.13" 
                alt="Logo Yu-gi-oh"
                 />
        </Link>
        
        <form  onSubmit={onSearchSubmit}>
            <div class="form-group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" class="icon-search">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input 
                 type='search'
                 name='valueSearch'
                 id=''
                 value={valueSearch}
                 onChange={onInputChange}
                 placeholder='Buscar nombre de carta'
                />
                <button class="btn-search">Buscar</button>
            </div>
        </form>

    </header>
        <Outlet />
    </>
    );
};