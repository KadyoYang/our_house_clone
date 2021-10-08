
import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react';
import { useState, createContext} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme, whiteTheme, MyTheme} from '../style/theme';

export interface MyThemeContext{
    themeMode: "dark" | "white"
    setThemeMode: (themeMode: "dark" | "white") => void
}

export const Context = createContext<MyThemeContext>({
    themeMode:"dark",
    setThemeMode:(themeMode:"dark" | "white")=>{}
})


const MyThemeProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState<"dark" | "white">("white");

    const changeThemeMode = (themeMode:"dark" | "white") => {setThemeMode(themeMode);}

    
    let theme = themeMode==="dark"? darkTheme: whiteTheme;
    return (
        <Context.Provider value={{themeMode, setThemeMode:changeThemeMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Context.Provider>
    )

}

export default MyThemeProvider;