import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
    NavigationContainer,
    NavLink,
    NavLinksContainers,
    LogoContainer
} from './navigation.styles';

function Navigation() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    

    const signOutHandler = async () => {
        try {
            const response = await signOutUser();
            setCurrentUser(null);
        } catch(error) {
            alert('Sign out failed!');
            console.log(error);
        }
        
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinksContainers>
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainers>
                <CartDropdown />
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;