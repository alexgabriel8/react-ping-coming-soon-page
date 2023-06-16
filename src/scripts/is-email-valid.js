const regex = /^([^.]+[^\.\@\-])+\@[^@.]+(\.[^@.][^@.]+)$/i

export function isEmailValid(rawEmail) {
    if (rawEmail.length === 0) return 'empty'
    const email = rawEmail.trim()
    if (email.match(regex) !== null) return email
    else return false
}