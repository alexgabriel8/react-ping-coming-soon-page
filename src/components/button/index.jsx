// Library Imports
import { useContext } from "react"
import styled from "styled-components"

// Context
import { ThemeContext } from "../../context/theme-context"

export const Button = (props) => {
    const {theme} = useContext(ThemeContext)
    
    return (
    <StyledButton {...props} theme={theme}>
        {props.children}
    </StyledButton>
    )
}

const StyledButton = styled.button`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${props => props.theme.primary};
    border-radius: 30px;
    
    @media (hover: hover) {
        :hover {
            cursor: pointer;
            background-color:${props => props.theme.btnHover}
        }
    }
    transition: background-color 0.2s ease-in-out;
`

StyledButton.defaultProps = {
    children: 'Button without children'
}