import React, {useState} from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
            {/*
            <h1>React video for context API</h1>
            <Login/>
            <Profile/>
            */}
        </UserContext.Provider>
    )
}

export default UserContextProvider