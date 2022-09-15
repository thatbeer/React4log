import { Children } from 'react';
import './button.styles.css'

const Button_class = {
    login:'login'
};


const Button = ({Children,buttontype,...otherProps}) => {
    return (
        <button 
           >
            {Children}
        </button>
    );
};


export default Button;