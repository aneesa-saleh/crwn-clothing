import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import Button from '../../components/button/button.component';

function SignIn() {
    const logInGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (<div>
        <h1>Sign In Page</h1>
        <Button buttonType="google" onClick={logInGoogleUser}>
            Sign in with Google
        </Button>

        <SignUpForm />
    </div>)
}

export default SignIn;