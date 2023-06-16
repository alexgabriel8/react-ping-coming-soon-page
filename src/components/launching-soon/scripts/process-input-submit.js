import { isEmailValid } from "../../../scripts/is-email-valid"

export function processInputSubmit(setState) {
    const emailInput = document.querySelector('#email-input')
    const inputFeedbackMessage = document.querySelector('#email-input + span > .input-error-message')
    
    const validationResult = isEmailValid(emailInput.value)

    if ([false, 'empty'].includes(validationResult)) {
        setState('error')
        emailInput.focus()

        inputFeedbackMessage.innerHTML = validationResult === 'empty' ? 'Whoops! It looks like you forgot to add your email.'
        : 'Oh no! The typed email is invalid. Please type a valid one.'

        emailInput.style.setProperty("animation", "shake 0.1s 2")
        setTimeout(() => {
            emailInput.style.removeProperty("animation-name")
        }, 300);
    } else {
        inputFeedbackMessage.innerHTML = 'Hooray! You will be warned of our launch in your email!'
        setState('success')
        emailInput.value = ''
    }
}