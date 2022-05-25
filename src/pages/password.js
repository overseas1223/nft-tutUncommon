import React, { useState } from 'react';
import "../assets/style.css";

function Login(props) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "superadmin")
            props.setIsChecked(true);
    }

    const handleChange = (e) => {
        if(e.target.name === "username") setUserName(e.target.value);
        else setPassword(e.target.value);
    }

    return (
        <div className="w-100 d-flex justify-content-center" onSubmit={(e) => handleSubmit(e)} style={{marginTop: 100}}>
            <form className="w-50">
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        placeholder="Enter userName"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="form-group text-left mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-3 w-100"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login;