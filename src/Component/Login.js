import React, { useEffect, useState } from "react";
import './Login.css'



const Login =(props)=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formValid,setFormValid] = useState(false)
    const [Ausername, setAUsername] = useState("admin1")
    const [Apassword, setAPassword] = useState("123456789")

    const inputUser=(event)=>{
        setUsername(event.target.value)
    }

    const inputPassword=(event)=>{
        setPassword(event.target.value)
    }
  
    const handleSubmit =(event)=>{
        event.preventDefault();
        const loginData = {
            Username:username,
            Password:password
        }
        if((username===Ausername) && (password===Apassword)){
            window.location.assign('/insert');
        }
        else{
            console.log('Not Login')
        }
        };

        useEffect(()=>{
            const checkData = username.trim().length!==0 && password.trim().length!==0
            setFormValid(checkData)
        },[username,password])

    return (
        <div>
            <h1>Login</h1>
            <form className="LoginWin">
                <div>
                    <label>User</label>
                    <input type="text" value={username} placeholder="Username" onChange={inputUser}/>
                </div>
                <div>
                    <label>Pass</label>
                    <input type="text" value={password} placeholder="Password" onChange={inputPassword}/>
                </div>
                <div>
                        <button className="btn" type="submit" disabled={!formValid} onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login