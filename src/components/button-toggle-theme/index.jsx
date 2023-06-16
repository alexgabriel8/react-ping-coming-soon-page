// Library imports
import { useContext, useEffect } from "react"
import styled from "styled-components"

// Context
import { ThemeContext, themes } from "../../context/theme-context"

// Components
import { Button } from "../button"

export const ToggleThemeButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        document.querySelector('#root').style.backgroundColor = `${theme.background}`
    }, [theme])
    
    return(
        <Btn
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
            theme={theme}
        >
            {theme.themeTogglerIcon}
        </Btn>
    )
}

const Btn = styled(Button)`
    border-radius: 50%;
    font-size: 25px;
    width: 50px;
    height: 50px;
    :hover {
        box-shadow: 0 0 50px ${props => props.theme.btnHover};
    }
    transition: box-shadow 0.25s linear;
`