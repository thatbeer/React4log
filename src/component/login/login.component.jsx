import { useState  } from "react";
import LoginForm from "./loginform.component";

import './login.styles.css'

const LoginCom = () => {
    const adminUser = {
        email : 'admin@admin.com',
        password: 'admin123'
    }

    const [user,setUser] = useState({name:"",email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);


        if (details.email == adminUser.email && details.password == adminUser.password) {
        console.log("Logged in");
        setUser({
            name:details.name,
            email:details.email
        });
        } else {
        console.log("there is no user");
        setError("Details do not match");
        }
    }

    const Logout = () => {
        setUser({name:"",email:""})
        console.log("Logout");
    }


    return (
        <div className="login-page">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome {user.name}</h2>
                    <button onClick={Logout} className="logout-box"><span>Logout</span></button>
                </div>

            ) : (
                <LoginForm Login={Login} error={error}/>
            )}

        </div>
    );


};
export default LoginCom;