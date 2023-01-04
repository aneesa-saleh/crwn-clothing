import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { UserContext } from '../../../contexts/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

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
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span onClick={signOutHandler} className='nav-link'>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                    
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;