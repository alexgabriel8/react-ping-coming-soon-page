// Library imports
import { useContext } from "react"
import styled, { css } from "styled-components"

// Context
import { ThemeContext } from "../../context/theme-context"

// Components
import { EmailForm } from "./email-form"

export const LaunchingSoonContainer = props => {
    const {theme} = useContext(ThemeContext)
    return(
        <Container isMobile={props.isMobile} theme={theme}>
            <p className="emphasized-paragraph centered">We are launching <strong>soon!</strong></p>
            <p className="centered">Subscribe and get notified</p>
            <EmailForm
                isMobile={props.isMobile}
            />
            <img
                className='illustration'
                src="./assets/illustration-dashboard.png"
                alt='Dashboard illustration'
            />
        </Container>
    )
}

const Container = styled.main`
    max-width: 820px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .centered {
        text-align: center;
    }

    .emphasized-paragraph {
        color: hsl(0, 0%, 59%);
        font-size: ${props => props.isMobile ? '3.5rem' : '4rem'};
    }
    .emphasized-paragraph > strong {
        color: hsl(209, 33%, 12%);
    }

    .illustration {

       margin: 50px 10px;
       ${props => props.theme.name === 'dark' && css`
        filter: brightness(80%);
       `}

    transition: filter 0.5s;
    }
`