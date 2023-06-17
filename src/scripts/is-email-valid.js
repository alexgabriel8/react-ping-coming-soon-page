const regex = /^[a-z0-9]+(\.[a-z0-9]+)?@[a-z0-9]+\.[a-z0-9]+$/i

export function isEmailValid(rawEmail = '') {
    if (rawEmail.length === 0) return 'empty'
    const email = rawEmail.trim()
    if (email.match(regex) !== null) return email
    else return false
}