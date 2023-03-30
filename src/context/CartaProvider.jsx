import { useEffect, useState} from "react";
import { useForm } from '../hook/useForm';
import { CartaContext } from "./CartaContext";

//38

export const CartaProvider = ({children}) => {

    const [allCartas, setAllCartas] = useState([]);
    const [globalCartas, setGlobalCartas] = useState([]);
    const [offset, setOffset] = useState(0);


    // Utilizar CustomHook - useForm
	const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

    // Estados para la aplicación simples
	const [loading, setLoading] = useState(true);

     //llamar 50 cartas 
    const getAllCartas = async (limit = 28) => {
            const baseUrl = 'https://db.ygoprodeck.com/api/v7/'

            const res = await fetch(`${baseUrl}cardinfo.php?offset=${offset}&num=${limit}`)

            const data = await res.json();
        

            const  results = data.data;
            setAllCartas(
                [...allCartas, ...results]
            )
            setLoading(false)

            console.log(results);
    }

    // Llamar todas las cartas

    const getGlobalCartas = async () => {
        const baseUrl = 'https://db.ygoprodeck.com/api/v7/'

        const res = await fetch(`${baseUrl}cardinfo.php?offset=0&num=12392`)

        const data = await res.json();

        const  results = data.data;
        
        setGlobalCartas(results)
        setLoading(false)
    }


    const getCartaByID = async id => {
		const baseUrl = 'https://db.ygoprodeck.com/api/v7/';

		const res = await fetch(`${baseUrl}cardinfo.php?id=${id}`);
		const data = await res.json();
        
        console.log(data.data[0]);
		return data.data[0];
	};

    useEffect(() => {
        getAllCartas()
    }, [offset])

    useEffect(() => {
        getGlobalCartas()
    }, [])

    const onClickLoadMore = () => {
		setOffset(offset + 50);
	};


  return (
    <CartaContext.Provider value={{
        valueSearch,
		onInputChange,
		onResetForm,
        allCartas,
        globalCartas,
        getCartaByID,
        onClickLoadMore,

        loading,
		setLoading,


    }}>
        {children}
    </CartaContext.Provider>
  );
}
