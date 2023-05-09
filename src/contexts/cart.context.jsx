import { useEffect } from "react";
import { createContext, useState } from "react";

function addCartItem(cartItems, productToAdd) {
    const cartItem = cartItems.find(
        item => item.id === productToAdd.id
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

function removeCartItem(cartItems, productToRemove) {
    const cartItem = cartItems.find(
        item => item.id === productToRemove.id
    );

    if (cartItem) {
        return cartItems.flatMap(
            (item) => {
                if (item.id === productToRemove.id) {
                    return item.quantity > 1 ? {...item, quantity: item.quantity - 1} : []
                } else {
                    return item;
                }
            }
        );
    } else {
        return [...cartItems];
    }
}

function clearCartItem(cartItems, productToClear) {
    return cartItems.filter(item => item.id !== productToClear.id);
}

export const CartContext = createContext({
    isShowingCartDropdown: false,
    setIsShowingCartDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
});

export const CartDropdownProvider = ({ children }) => {
    const [isShowingCartDropdown, setIsShowingCartDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    
    const addItemToCart = (productToAdd) => {
        const updatedCartItems = addCartItem(cartItems, productToAdd);
        setCartItems(updatedCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const updatedCartItems = removeCartItem(cartItems, productToRemove);
        setCartItems(updatedCartItems);
    }

    const clearItemFromCart = (productToClear) => {
        const updatedCartItems = clearCartItem(cartItems, productToClear);
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

    const value = {
        isShowingCartDropdown,
        setIsShowingCartDropdown,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}