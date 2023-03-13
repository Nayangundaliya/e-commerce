import { createContext, useContext, useEffect, useReducer } from 'react'
import axios from 'axios';
import reducer from '../reducer/ReducerPorducts';

const AppContex = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoding: false,
    isError: false,
    products: [],
    featureProducts: [],
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {

        dispatch({ type: 'SET_LODING' });

        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: 'SET_API_DATA', payload: products });
        } catch (error) {
            dispatch({ type: 'API_ERROR' });
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return <>
        <AppContex.Provider value={{ ...state }}>{children}</AppContex.Provider>
    </>
};

//custom hooks

const useProductContex = () => {
    return useContext(AppContex);
}


export { AppProvider, AppContex, useProductContex };
