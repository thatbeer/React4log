
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react';
import {useState} from 'react';

import { Button , Alert ,Row,Col,Container,Form} from 'react-bootstrap'

import './testbutton.styles.css'



const defaultFormFields = {
    email: '',
    password: '',
};






const TestButton = () => {
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
        <div className="Button-container">
            <header>
                <Container>
                <Form onSubmit={handleChange}>
                <div className='form-inner'>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-center">Email Address</Form.Label>
                            <Form.Control type='email' placeholder='example@email.com'/>
                            <Form.Text className="text-right">for example : suviwat.py@pylon.com</Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group >
                            <Form.Label className="text-center">Password</Form.Label>
                            <Form.Control type='password' placeholder='password'/>
                            <Form.Text className="text-right">beware of bad will</Form.Text>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Button variant='outline-primary' value= 'submit'type='submit' size="lg">Login</Button>
                </div>
                </Form>
                </Container>
            </header>
        </div>
    )
}

;


export default TestButton;