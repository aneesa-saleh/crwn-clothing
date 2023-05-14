import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

function CartDropdown() {
    const { isShowingCartDropdown, cartItems } = useContext(CartContext);
    const hide = isShowingCartDropdown ? '' : 'hide';
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    };

    return (
        <CartDropdownContainer className={`${hide}`}>
            <CartItems>
                { cartItems && cartItems.length ? cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    )) : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;