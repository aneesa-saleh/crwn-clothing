import { useEffect } from "react";
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
    addItemToCart: () => {},
    cartCount: 0, // same function as getCartCount, just practising using hooks with context 
});

export const CartDropdownProvider = ({ children }) => {
    const [isShowingCartDropdown, setIsShowingCartDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    
    const addItemToCart = (productToAdd) => {
        const updatedCartItems = addCartItem(cartItems, productToAdd);
        setCartItems(updatedCartItems);
    }

    const getCartCount = () => {
        if(cartItems) {
            return cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
        }
    
        return 0;
    }

    useEffect(() => {
        const currentCartCount = getCartCount();
        setCartCount(currentCartCount);
    }, [cartItems]);

    const value = { isShowingCartDropdown, setIsShowingCartDropdown, cartItems, addItemToCart, cartCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}