import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqqfpU3iH5jNexR5jIjxjD3YYs20up-9E",
    authDomain: "crwn-clothing-db-bbbb8.firebaseapp.com",
    projectId: "crwn-clothing-db-bbbb8",
    storageBucket: "crwn-clothing-db-bbbb8.appspot.com",
    messagingSenderId: "108261435774",
    appId: "1:108261435774:web:5699a6737433b0231dab2f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt })
        } catch(error) {
            console.log('Error creating the user', error.message);
        }
    } else {
        return userDocRef;
    }
}