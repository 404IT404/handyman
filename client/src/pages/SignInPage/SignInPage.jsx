import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../../assets/sass/GlobalStyles.scss"
import "../../assets/sass/SignInPage.scss"

import Login_Img_1 from "../../assets/images/Login_Img_1.png"
import Login_Img_2 from "../../assets/images/Login_Img_2.png"

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const SignInPage = () => {
    const [users, setUsers] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${BASE_API_URL}/users`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok) {
                throw new Error("Server Error")
            }

            const data = await response.json()
            setUsers(data)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const onHandleLogin = async (e) => {
        e.preventDefault()
        const clients = users[0]['client'];

        const username_ = username;
        const password_ = password;

        const user = clients.find((client) => {
            return client.username === username_ && client.password === password_
        })

        if(user) {
            navigate("/client-home")
        } else {
            setError(true)
        }
    }

  return (
    <div className="sign-in-container">
        <div className="sign-in-left-container">
            <h1>Handyman</h1>
            <p>Your Trusted Home Repair Companion.</p>
            <img src={Login_Img_1} alt="Login Image" width="500px" height="500px"/>
        </div>
        <div className="sign-in-right-container">
            <img src={Login_Img_2} alt="Login Image"/>
            <h1>Welcome back!</h1>
            <p>Sign in your account to continue.</p>
            <form className="flex-column" 
                onSubmit={onHandleLogin}>
                <div className="flex-column">
                    <label htmlFor="username_input">
                        Username
                    </label>
                    <input 
                        type="text" 
                        className="input-1"
                        id="username_input"
                        required
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}/>
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
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}/>
                </div>
                <div className="register-link-text">
                    <p >Don&#39;t have an account yet?&nbsp;
                        <Link className="Link" to="/">Sign up</Link>
                    </p>
                    {error ? <p className="error-1">
                        Username and Password is incorrect
                    </p> : ""}
                </div>
                <button className="button-1">Sign in</button>
            </form>
        </div>
    </div>
  )
}