
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button , Alert } from 'react-bootstrap'


const TestButton = () => {
    return (
        <div className="Button-container">
            <header>
                <Alert variant="success">THis is Button</Alert>
                <Button>Test Button</Button>
            </header>
        </div>
    )
}

;


export default TestButton