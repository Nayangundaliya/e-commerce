import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContex } from "./Productcontex";
import  reducer  from "../reducer/Filter_reducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    gird_view:false,
}

export const FilterContectProvider = ({ children }) => {

    const { products } = useProductContex();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRIDVIEW" });
    };

    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" });
    };

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView }}>{children}</FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}