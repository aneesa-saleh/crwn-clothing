import SignUpForm from '../../components/sign-up/sign-up-form.component';
import Button from '../../components/button/button.component';
import SignInForm from '../../components/sign-in/sign-in-form.component';

function Authentication() {
    

    return (
        <div>
            <h1>Sign In Page</h1>
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default Authentication;