import { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/sass/GlobalStyles.scss";
import "../../assets/sass/SignUpPage.scss";

import SignUp_Img_1 from "../../assets/images/SignUp_Img_1.png";
import SignUp_Img_2 from "../../assets/images/Login_Img_2.png";

export const SignUpPage = () => {
    const [error, setError] = useState();
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
            <form className="flex-column">
                <div className="flex-column">
                    <label htmlFor="username_input">
                        Username
                    </label>
                    <input 
                        type="text" 
                        className="input-1"
                        id="username_input"
                        required
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
                        required
                        />
                </div>
                <div className="register-link-text">
                    <p >Already have an account?&nbsp;
                        <Link className="Link" to="/sign-in">Sign In</Link>
                    </p>
                    {error ? <p className="error-1">
                        Username and Password is incorrect
                    </p> : ""}
                </div>
                <button className="button-1">Register</button>
            </form>
        </div>
    </div>
    )
}