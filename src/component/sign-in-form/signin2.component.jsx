import { Outlet } from 'react-router-dom';
import {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.css'

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email , password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }



    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields,[name] : value});
    };

    return (
        <div className='sign-up-container'>
            <div className='form-box-container'>
                <h2> Comapanies Box</h2>
                <span>Sign in with your company's ID</span>
                <form className='form-container' onSubmit={() => {}}>
                    <label>ID</label>
                    <input type='text' required/>
                    <label>Password</label>
                    <input type='password' required/>
                    <input type="submit"  value="Sumbit"/>
        
                </form>
            </div>
        </div>
    );
};

export default SignInForm;