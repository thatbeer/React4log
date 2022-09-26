
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpform from "../../component/sign-up/sign-up.component";
import SignInform from "../../component/sign-in/sign-in.component";
import { signInWithGooglePopup ,
    createUserDocumentFromAuth ,
    signInWithGoogleRedirect,
    auth,
} from "../../utils/firebase/firebase.utls";

const Authentication = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };

    

    return (
        <div>
            <h1>Sign In Page</h1>
            <SignInform/>
            <SignUpform/>
        </div>
    )
}

export default Authentication;