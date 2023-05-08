import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-icon.styles.scss';

function CartIcon() {
    const { isShowingCartDropdown, setIsShowingCartDropdown, cartItems, getCartCount } = useContext(CartContext);

    const toggleCartDropdown = () => {
        setIsShowingCartDropdown(!isShowingCartDropdown);
    }

    const cartCount = getCartCount();

    return (
        <div className="cart-icon-container">
            <Button onClick={toggleCartDropdown} buttonType="cart-button">
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{cartCount}</span>
            </Button>
        </div>
         
    )
}

export default CartIcon;