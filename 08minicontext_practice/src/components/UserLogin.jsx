import React from "react";
import { useState } from "react";
import { useUser } from "../context/UserContext";

function UserLogin() {
    const {user, login} = useUser()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginProfile = (e) => {
        e.preventDefault()
        login({name: username, pass: password})
    }
    return(
        <form onSubmit={loginProfile}>
            <input 
            type="text" 
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}/>

            <input type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)} />
            <input type="submit"
            value="submit" />
        </form>
    )
}

export default UserLogin