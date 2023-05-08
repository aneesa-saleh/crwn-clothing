import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    isShowingCartDropdown: false,
    setIsShowingCartDropdown: () => {},
});

export const CartDropdownProvider = ({ children }) => {
    const [isShowingCartDropdown, setIsShowingCartDropdown] = useState(false);

    const value = { isShowingCartDropdown, setIsShowingCartDropdown };

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}