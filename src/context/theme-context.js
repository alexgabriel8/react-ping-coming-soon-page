import { createContext, useState, useEffect } from "react";
import { saveOnLocalStorage, getLocallyStoredItem } from "../scripts/local-storage";

export const themes = {
    light: {
        name: 'light',
        primary: 'hsl(223, 87%, 63%)',
        secondary: 'hsl(223, 100%, 88%)',
        danger: 'hsl(354, 100%, 66%)',
        success: 'hsl(120, 100%, 30%)',
        background: '#FFFFFF',
        neutral: 'hsl(0, 0%, 59%)',
        neutralDarker: 'hsl(209, 33%, 12%)',
        btnHover: 'hsl(223, 87%, 43%)',
        themeTogglerIcon: '☀️',
        socialIconFill: 'hsl(223, 87%, 63%)',
        socialIconBackground: 'hsl(223, 87%, 63%)'
    },
    dark: {
        name: 'dark',
        primary: 'hsl(223, 87%, 63%)',
        secondary: 'hsl(223, 100%, 88%)',
        danger: 'hsl(354, 100%, 66%)',
        success: 'greenyellow',
        background: 'hsl(207, 33%, 30%)',
        neutral: 'hsl(0, 0%, 59%)',
        neutralDarker: 'hsl(209, 33%, 12%)',
        btnHover: 'hsl(223, 87%, 73%)',
        themeTogglerIcon: '🌙',
        socialIconFill: 'hsl(0, 0%, 59%)',
        socialIconBackground: 'hsl(209, 33%, 12%)'
    }
}

let lastSessionTheme = getLocallyStoredItem('lastUsedTheme', true)
if (lastSessionTheme === null) lastSessionTheme = themes.light

export const ThemeContext = createContext({})

export const ThemeProvider = props => {
    const [theme, setTheme] = useState(lastSessionTheme)
    useEffect(() => {
        saveOnLocalStorage('lastUsedTheme', theme, true)
    }, [theme])
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}