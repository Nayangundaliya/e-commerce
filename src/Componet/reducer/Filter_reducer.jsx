const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCT":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }
        
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
        
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }
        
        case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProduct = [...action.payload];

            if (state.sorting_value === "lowest") {
                const sortingProduct = (a, b) => {
                    return a.price - b.price;
                };

                newSortData = tempSortProduct.sort(sortingProduct);
            }

            if (state.sorting_value === "heighest") {
                const sortingProduct = (a, b) => {
                    return b.price - a.price;
                };

                newSortData = tempSortProduct.sort(sortingProduct);
            }

            if (state.sorting_value === "a-z") {
                newSortData = tempSortProduct.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );    
            }

            if (state.sorting_value === "z-a") {
                newSortData = tempSortProduct.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }

            return {
                ...state,
                filter_products:newSortData,
            }
        
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                },
            } 
        
        case "FILTER_PRODUCTS": {

            let { all_products } = state;
            let tempFilterProduct = [...all_products];
            const { text } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            }
        }

        default:
            return state;
    }
}

export default filterReducer;