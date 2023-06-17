import { isEmailValid } from './scripts/is-email-valid';

describe('Validation of valid email:', () => {
  it('Should consider "  name@host.tld  " with whitespace valid and return it trimmed', () => {
    const email = '     name@host.tld      '
    const validationResult = isEmailValid(email)
    expect(validationResult).toBe('name@host.tld')
  })
})

describe('Validation of invalid emails:', () => {
  it('Should return "empty" when no argument is sent', () => {
    const validationResult = isEmailValid()
    expect(validationResult).toBe("empty")
  })

  it('Should return false for an email without at-sign', () => {
    const email = 'namehost.tld'
    const validationResult = isEmailValid(email)
    expect(validationResult).toBe(false)
  })

  describe('Before at-sign validation:', () => {
    it('Should return false for local not starting with number or letter', () => {
      const email = '.name@host.tld'
      const validationResult = isEmailValid(email)
      expect(validationResult).toBe(false)
    })

    it('Should return false if local does not end with a word or number', () => {
      const email = 'name.@host.tld'
      const validationResult = isEmailValid(email)
      expect(validationResult).toBe(false)
    })
  })

  describe('After at-sign validation:', () => {
    it('Should return false for an email without a TLD', () => {
      const email = 'name@hosttld'
      const validationResult = isEmailValid(email)
      expect(validationResult).toBe(false)
    })

  })
})