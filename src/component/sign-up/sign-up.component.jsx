import { Form } from "react-router-dom"
import { useState } from "react";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utls";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utls";

import FormInput from "../forminput/forminput.component";
import Button from "../button/button.component";
import './sign-up.styles.scss'

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpform = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password,confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        if(password !== confirmPassword) {
            alert("password does not match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            console.log(user)

            await createUserDocumentFromAuth(user,{ displayName});
            alert('succeed')
            resetFormFields();


        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert("cannot create user , email already in use");
            } else if (error.code === 'auth/weak-password'){
                alert("cannot create user , password too weak(password should contain as least 6 characters");
            }
            else {
                console.error('user creation encoutered an error',error)
            }
        }

        
    }

    const handleChange = (event) => {
        const {name , value} = event.target;

        setFormFields({...formFields,[name]:value})
    };


    return (
        <div className="sign-up-container">
            <span>SignUp with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="display name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                
                <FormInput label="Email" type="email" required onChange={handleChange} name="email"value={email} />

               
                <FormInput label="Password" type="password" required onChange={handleChange} name = "password" value={password}/>

             
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name= "confirmPassword" value={confirmPassword}/>

                <Button buttonType='google' type="submit">BUTTON SignUp</Button>
            </form>
        </div>
    )
}
export default SignUpform;