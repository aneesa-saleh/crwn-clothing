import { BaseButton, GoogleSignInButton, InvertedButton, CartButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google',
    inverted: 'inverted',
    'cart-button': 'cart-button'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES['cart-button']]: CartButton,
    }
)[buttonType];

function Button({ children, buttonType, ...otherProps }) {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default Button;