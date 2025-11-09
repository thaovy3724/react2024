import React from "react";
import { useTheme } from "../contexts/ThemeMode";

function ThemeBtn(){

    const {themeMode, lightTheme, darkTheme} = useTheme()

    const changeTheme = () => {
        if(themeMode === "white") darkTheme()
        else lightTheme()
        console.log("vy")
        console.log(themeMode)
    }

    return(
        <label htmlFor="">
        <input 
        type="checkbox"
        onChange={changeTheme} /> 
        check for dark
        </label>
    )
}

export default ThemeBtn