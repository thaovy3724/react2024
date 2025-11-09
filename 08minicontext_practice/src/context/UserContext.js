import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const UserContext = createContext({
    user: null, 
    login: () => {}
})

export const UserProvider = UserContext.Provider

export const useUser = () => {
    return useContext(UserContext)
}