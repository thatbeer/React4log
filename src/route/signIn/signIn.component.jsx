
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpform from "../../component/sign-up/sign-up.component";

import { signInWithGooglePopup ,
    createUserDocumentFromAuth ,
    signInWithGoogleRedirect,
    auth,
} from "../../utils/firebase/firebase.utls";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };

    

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpform/>
        </div>
    )
}

export default SignIn;