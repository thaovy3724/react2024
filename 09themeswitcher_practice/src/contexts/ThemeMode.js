import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "white",
    lightTheme: () => {},
    darkTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
    return useContext(ThemeContext)
}