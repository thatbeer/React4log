import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  
} from 'firebase/auth';

import {getFirestore , doc,getDoc,setDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyDxK2lCQaxzci1c1ODY3464EkaLQV8N85w',
  authDomain: 'testator-740e6.firebaseapp.com',
  projectId: 'testator-740e6',
  storageBucket: 'testator-740e6.appspot.com',
  messagingSenderId: '342520627378',
  appId: '1:342520627378:web:34ce7bb66c34fe45b589ab',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName , email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,email,createdAt
            });
        } catch (error){
            console.log('error creating the user',error.message);
        }
    }

    return userDocRef;

};


export const createUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}