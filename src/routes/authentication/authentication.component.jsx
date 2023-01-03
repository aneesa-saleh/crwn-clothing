import SignUpForm from '../../components/sign-up/sign-up-form.component';
import Button from '../../components/button/button.component';
import SignInForm from '../../components/sign-in/sign-in-form.component';

import './authentication.styles.scss'

function Authentication() {
    

    return (
        <div className="authentication-container">
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default Authentication;