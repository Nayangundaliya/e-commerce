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
    isSingleLoding: false,
    singleProduct: {},
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

    // single product api call

    const getSingleProduct = async (url) => {
        dispatch({type:"SINGLE_LODING"})
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data();
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
        } catch (error) {
            dispatch({ type: 'SINGLE_PRODUCT_ERROR' });
        }
    };

    useEffect(() => {
        getProducts(API);
    }, []);

    return <>
        <AppContex.Provider value={{ ...state, getSingleProduct }}>{children}</AppContex.Provider>
    </>
};

//custom hooks

const useProductContex = () => {
    return useContext(AppContex);
}


export { AppProvider, AppContex, useProductContex };
