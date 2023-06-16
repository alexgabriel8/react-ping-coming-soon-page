import { render, screen } from '@testing-library/react';
import { isEmailValid } from './scripts/is-email-valid';

describe('Email Validation', () => {
  it('Should consider "name@host.tld" valid', () => {
    const validationResult = isEmailValid('name@host.tld')
    expect(validationResult).toBe(true)
  })
})