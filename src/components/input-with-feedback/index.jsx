import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import styled, { css } from "styled-components";

export const InputWithFeedback = props => {
    const {theme} = useContext(ThemeContext)
    return (
        <StyledDiv
            theme={theme}
            isMobile={props.isMobile}
        >
            <StyledInput
                {...props}
                theme={theme}
            />
            <InputFeedbackMessage
                isMobile={props.isMobile}
            >
                <em className="input-error-message">&#nbsp;</em>
            </InputFeedbackMessage>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: relative;
`

const StyledInput = styled.input`
    width: ${window.matchMedia("(max-width: 410px)").matches ? '90vw' : '400px'};
    height: 50px;
    outline: none;
    border-radius: 30px;
    border-style: solid;
    padding: 0 20px;
    ${props => props.theme.name === 'dark' && css`
        filter: brightness(80%);
   `}

    transition: filter 0.5s;
`

const InputFeedbackMessage = styled.span`
    width: ${window.matchMedia("(max-width: 410px)").matches ? '90vw' : '400px'};
    text-align: ${props => props.isMobile ? 'center' : 'left'};
    font-size: ${props => props.isMobile ? '1.2rem' : '1.4rem'};
`