
const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        
        let existingProduct = state.cart.find(
            (curItem) => curItem.id === id + color
        );

        if (existingProduct) {
            let updateProduct = state.cart.map((curElem) => {
                if (curElem.id ===   id + color) {
                    let newAmount = curElem.amount + amount;
                    if (newAmount >= curElem.max) {
                        newAmount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount: newAmount,
                    }
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart: updateProduct,
            };
        } else {
            let cartProduct;
            cartProduct= {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max:product.stock,
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };
        }

    }

    // Decrease and Increase
    if (action.type === "SET_DECREASE") {
        let updateProduct = state.cart.map((curElem) => {
            console.log(state.cart)
            if (curElem.id === action.payload) {
                let decAmount = curElem.amount - 1;

                if (decAmount <= 1) {
                    decAmount = 1;
                }

                return {
                    ...curElem,
                    amount: decAmount,
                }
            } else {
                return curElem;
            }
        });

        return {
            ...state,
            cart: updateProduct,
        };
    }

    if (action.type === "SET_INCREASE") {
        let updateProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let inAmount = curElem.amount + 1;

                if (inAmount >= curElem.max) {
                    inAmount = curElem.max;
                }

                return {
                    ...curElem,
                    amount: inAmount,
                }
            } else {
                return curElem;
            }
        });

        return {
            ...state,
            cart: updateProduct,
        };
    }

    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter((curItem) => curItem.id !== action.payload);
        return {
            ...state,
            cart:updateCart,
        }
    }

    // Clear Cart

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart:[],
        }
    }

    if (action.type === "CART_TOTAL_ITEM") {
        let updatedItemVal = state.cart.reduce((acc, curElem) => {
          let { amount } = curElem;
    
          acc = acc + amount;
          return acc;
        }, 0);
    
        return {
          ...state,
          total_item: updatedItemVal,
        };
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let total = state.cart.reduce((initialVal, curElem) => {
            let { price, amount } = curElem;

            initialVal = initialVal + price * amount;
            return initialVal;
        }, 0);
        
        return {
            ...state,
            total_price: total,
        }
    }

    return state;
    
}

export default cartReducer
