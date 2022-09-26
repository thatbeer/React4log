import { Form } from "react-router-dom"
import { useState } from "react";


import { createAuthWithEmailAndPassword} from '../../utils/firebase/firebase.utls   '

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpform = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password,confirmPassword} = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email , password} = event.target;

        if(password !== confirmPassword) {
            alert("password does not match");
            return;
        }
        try {
            const response = await createAuthWithEmailAndPassword(email,password);
            console.log(response)
        } catch(error) {
            console.error('user creation encoutered an error',error)
        }

        
    }

    const handleChange = (event) => {
        const {name , value} = event.target;

        setFormFields({...formFields,[name]:value})
    };


    return (
        <div>
            <h2>SignUp with your email and password</h2>
            <form onSubmit={() => {}}>
                <label>user Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>email</label>
                <input type="email" required onChange={handleChange} name="email"value={email} />

                <label>password</label>
                <input type="password" required onChange={handleChange} name = "password" value={password}/>

                <label>Confirm password</label>
                <input type="password" required onChange={handleChange} name="ConfirmPassword" value={confirmPassword}/>

                <button type="submit">BUTTON SignUp</button>
            </form>
        </div>
    )
}
export default SignUpform;