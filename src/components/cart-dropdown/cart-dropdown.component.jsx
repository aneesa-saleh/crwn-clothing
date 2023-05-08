import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss'

function CartDropdown() {
    const { isShowingCartDropdown } = useContext(CartDropdownContext);
    const hide = isShowingCartDropdown ? '' : 'hide';

    return (
        <div className={`cart-dropdown-container ${hide}`}>
            <div className="cart-items">
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;