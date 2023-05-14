import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

function CartIcon() {
    const { isShowingCartDropdown, setIsShowingCartDropdown, cartCount } = useContext(CartContext);

    const toggleCartDropdown = () => {
        setIsShowingCartDropdown(!isShowingCartDropdown);
    }

    return (
        <CartIconContainer>
            <Button onClick={toggleCartDropdown} buttonType="cart-button">
                <ShoppingIcon className="shopping-icon" />
                <ItemCount>{cartCount}</ItemCount>
            </Button>
        </CartIconContainer>
         
    )
}

export default CartIcon;