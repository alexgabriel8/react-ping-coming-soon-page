import styled from "styled-components";
import { ToggleThemeButton } from "../button-toggle-theme";

export const Header = () => {
    return(
        <StyledHeader>
            <ToggleThemeButton />
            <Logo
                src='./assets/logo.svg'
                alt='Logo of Ping'
            />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    min-width: 200px;
    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const Logo = styled.img`
    justify-self: center
`