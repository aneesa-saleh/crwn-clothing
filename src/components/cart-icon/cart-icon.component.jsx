import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-icon.styles.scss';

function CartIcon() {
    const { isShowingCartDropdown, setIsShowingCartDropdown } = useContext(CartContext);

    const toggleCartDropdown = () => {
        setIsShowingCartDropdown(!isShowingCartDropdown);
    }

    return (
        <div className="cart-icon-container">
            <Button onClick={toggleCartDropdown} buttonType="cart-button">
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">0</span>
            </Button>
        </div>
         
    )
}

export default CartIcon;