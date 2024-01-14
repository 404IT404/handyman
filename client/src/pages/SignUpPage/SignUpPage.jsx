import { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/sass/GlobalStyles.scss";
import "../../assets/sass/SignUpPage.scss";

import SignUp_Img_1 from "../../assets/images/SignUp_Img_1.png";
import SignUp_Img_2 from "../../assets/images/Login_Img_2.png";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onUserRegister = async () => {

        try {
            const response = await fetch(`${BASE_API_URL}/handyman-server/controller/api/UserRegister.php`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            })
            if(!response.ok) {
                throw new Error("Invalid Request");
            }

            const result = await response.json();
            console.log(result)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="sign-up-container">
        <div className="sign-up-left-container">
            <h1>Handyman</h1>
            <p>Your Trusted Home Repair Companion.</p>
            <img src={SignUp_Img_1} alt="Login Image" width="500px" height="500px"/>
        </div>
        <div className="sign-up-right-container">
            <img src={SignUp_Img_2} alt="Login Image"/>
            <h1>Be part of our community</h1>
            <p>Sign up an account to continue</p>
            <form className="flex-column" onSubmit={onUserRegister}>
                <div className="flex-column">
                    <label htmlFor="username_input">
                        Username
                    </label>
                    <input 
                        type="text" 
                        className="input-1"
                        id="username_input"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                </div>
                <div className="flex-column password-wrapper">
                    <label htmlFor="password_input">
                        Password
                    </label>
                    <input 
                        type="password"
                        className="input-1"
                        id="password_input"
                        name="password"
                        required
                        value={password}
                        onChange={(e)=> {
                            setPassword(e.target.value)
                        }}
                        />
                </div>
                <div className="register-link-text">
                    <p >Already have an account?&nbsp;
                        <Link className="Link" to="/sign-in">Login</Link>
                    </p>
                </div>
                <button className="button-1">Register</button>
            </form>
        </div>
    </div>
    )
}