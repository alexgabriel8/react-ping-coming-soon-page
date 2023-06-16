// Library imports
import { useState, useContext } from "react"
import styled, { css } from "styled-components"

// Context 
import { ThemeContext, themes } from "../../../context/theme-context"

// Components
import { InputWithFeedback } from "../../input-with-feedback"
import { SubmitEmailButton } from "./button-submit-email"

// Scripts
import { processInputSubmit } from "../scripts/process-input-submit"

export const EmailForm = props => {
    const {theme} = useContext(ThemeContext)
    const [inputVisualState, setInputVisualState] = useState('typing')

    return(
    <Form
        autoComplete="on"
        noValidate
        onSubmit={event => event.preventDefault()}
        isMobile={props.isMobile}
        inputVisualState={inputVisualState}
        theme={theme}
    >
        <InputWithFeedback
            type="email"
            id="email-input"
            placeholder="Your email address..."
            autocomplete="email"
            onChange={() => setInputVisualState('typing')}
            isMobile={props.isMobile}
        />
            <SubmitEmailButton
                onClick={() => processInputSubmit(setInputVisualState)}
            />
    </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    justify-content: center;
    ${props => props.isMobile ? 'align-items: center;' : ''}
    gap: 20px 10px;

    ${props => props.inputVisualState === 'typing' && css`
        #email-input {
            border-color: ${props => props.theme.name === 'light' ? props.theme.secondary : props.theme.neutral};
        }
        span > .input-error-message {
            visibility: hidden;
        }
    `}
    ${props => props.inputVisualState === 'error' && css`
        #email-input{
            border-color: ${props => props.theme.danger};
        }
        span > .input-error-message {
            color: ${props => props.theme.danger};
        }

        @keyframes shake {
            0% {transform: translate(5px);}
            50% {transform: translate(-10px);}
            100% {transform: translate(5px);}
        }
    `}
    ${props => props.inputVisualState === 'success' && css`
        #email-input{
            border-color: ${props => props.theme.success};
        }
        span > .input-error-message {
            color: ${props => props.theme.success};
        }
    `}
`