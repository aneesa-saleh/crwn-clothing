import { createContext, useState } from "react";

function addCartItem(cartItems, productToAdd) {
    const cartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (cartItem) {
        return cartItems.map(
            item => item.id === productToAdd.id ?
                {...item, quantity: item.quantity + 1}
                :
                item
        )
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
}

export const CartContext = createContext({
    isShowingCartDropdown: false,
    setIsShowingCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartDropdownProvider = ({ children }) => {
    const [isShowingCartDropdown, setIsShowingCartDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd) => {
        const updatedCartItems = addCartItem(cartItems, productToAdd);
        setCartItems(updatedCartItems);
    }

    const value = { isShowingCartDropdown, setIsShowingCartDropdown, cartItems, addItemToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}