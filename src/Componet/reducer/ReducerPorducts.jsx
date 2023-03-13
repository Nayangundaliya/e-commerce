const ProductReducer = (state, action) => {
    // if (action.type === "SET_LODING") {
    //     return {
    //         ...state,
    //         isLoding: true,
    //     }
    // }

    // if (action.type === "API_ERROR") {
    //     return {
    //         ...state,
    //         isLoding: false,
    //         isError: true,
    //     }
    // }

    switch (action.type) {
        case "SET_LODING":
            return {
                ...state,
                isLoding: true,
            }
        
        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            })

            return {
                ...state,
                isLoding: false,
                products: action.payload,
                featureProducts: featureData,
            }

        case "API_ERROR":
            return {
                ...state,
                isLoding: false,
                isError: true,
            }
        
        case "SINGLE_LODING":
            return {
                ...state,
                isSingleLoding:true,
            }
        
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoding: false,
                isngleProduct: action.payload,
            } 

        case "SINGLE_PRODUCT_ERROR":
            return {
                ...state,
                isSingleLoding: false,
                isError:true,
            }
        
        default: return state;
    }
};

export default ProductReducer;