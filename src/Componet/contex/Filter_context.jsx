import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContex } from "./Productcontex";
import  reducer  from "../reducer/Filter_reducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    gird_view: true,
    sorting_value: "lowest",
    filters: {
        text:"",
    },
}

export const FilterContectProvider = ({ children }) => {

    const { products } = useProductContex();

    const [state, dispatch] = useReducer(reducer, initialState);

    // to set the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    // to set the list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    

    const sorting = (event) => {
        let  userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    }

    //search function

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.velue;

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS", payload: products });
    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFilterValue,
            }}>{children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}