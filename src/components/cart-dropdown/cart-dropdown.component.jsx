import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'

function CartDropdown() {
    const { isShowingCartDropdown, cartItems } = useContext(CartContext);
    const hide = isShowingCartDropdown ? '' : 'hide';

    return (
        <div className={`cart-dropdown-container ${hide}`}>
            <div className="cart-items">
                { cartItems && cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;