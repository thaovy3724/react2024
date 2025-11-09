import React from "react";
import { useUser } from "../context/UserContext";

function UserProfile(){
    const {user} = useUser()

    return(
        <h1>
        profile: {user ? <span>{user.name}</span> : <span>no login</span>}
        </h1>
    )
}

export default UserProfile