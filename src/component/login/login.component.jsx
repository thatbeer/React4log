import { useState } from "react";
import LoginForm from "./loginform.component";

const LoginCom = () => {
    const adminUser = {
        email : "admin@admin.com",
        password: "admin123"
    }

    const [user,setUser] = useState({name:"",email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("Logout");
    }


    return (
        <div className="login-page">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome {user.name}</h2>
                    <buttom>Logout</buttom>
                </div>

            ) : (
                <LoginForm Login={Login} error={error}/>
            )}

        </div>
    );


};
export default LoginCom;