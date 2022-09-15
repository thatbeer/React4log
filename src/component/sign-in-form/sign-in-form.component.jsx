import { Outlet } from 'react-router-dom';
import {useState} from 'react';


import 'bootstrap/dist/css/bootstrap.min.css'
import { Button , Alert ,Col , Row} from 'react-bootstrap'

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
        console.log(setFormFields)
    };

    return (
        <div className='sign-up-container'>
            <div className='form-box-container'>
                <h2> Comapanies Box</h2>
                <span>Sign in with your company's ID</span>
                <form className='form-container' onSubmit={handleChange}>
                    <div className="user-box">
                        <label>ID</label>
                        <input type='text' required/>
                    </div>
                    <div className="password-box">
                        <label>Password</label>
                        <input type='password' required/>
                    </div>
                    <Col md>
                        <Button type="submit" value="Login"/> 
                    </Col>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;