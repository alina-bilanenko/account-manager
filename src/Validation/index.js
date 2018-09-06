import { fieldNames } from 'utils/consts'
import moment from 'moment'

export const accountValidation = (inputs) => {
  const errors = {}

  if (!inputs[fieldNames.userName]) {
    errors[fieldNames.userName] = 'Required'
  }

  if (!inputs[fieldNames.password]) {
    errors[fieldNames.password] = 'Required'
  }

  if (!inputs[fieldNames.repeatPassword]) {
    errors[fieldNames.repeatPassword] = 'Required'
  }

  if (
    inputs[fieldNames.photo] &&
    new Blob([inputs[fieldNames.photo]]).size > 1000000
  ) {
    errors[fieldNames.photo] = 'Size too big'
  }

  return errors
}

export const confirmPassword = (input) =>
  input ? undefined : `Required`

export const matchInput = (input, allInputs) =>
  input === allInputs[fieldNames.password]
    ? undefined
    : 'Passwords don’t match'

export const profileValidation = inputs => {
  const errors = {}
  const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/

  if (!inputs[fieldNames.firstName]) {
    errors[fieldNames.firstName] = 'Required'
  }

  if (!inputs[fieldNames.lastName]) {
    errors[fieldNames.lastName] = 'Required'
  }

  if (inputs[fieldNames.birthDate] &&
    moment().diff(inputs[fieldNames.birthDate], 'years') < 18
  ) {
    errors[fieldNames.birthDate] = 'You must be over 18 years of age'
  }

  if (!inputs[fieldNames.email]) {
    errors[fieldNames.email] = 'Required'
  }

  if (inputs[fieldNames.email] && !regEmail.test(inputs[fieldNames.email])) {
    errors[fieldNames.email] = 'Invalid email'
  }

  return errors
}

export const contactsValidation = (inputs) => {
  const errors = {}
  const regPhone = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/

  if (!inputs[fieldNames.company]) {
    errors[fieldNames.company] = 'Required'
  }

  if (!inputs[fieldNames.mainLanguage] || inputs[fieldNames.mainLanguage].length < 1) {
    errors[fieldNames.mainLanguage] = 'Required'
  }

  if (inputs[fieldNames.fax] && !regPhone.test(inputs[fieldNames.fax])) {
    errors[fieldNames.fax] = 'Invalid number'
  }

  if (inputs[fieldNames.phone] && inputs[fieldNames.phone].length) {
    const phoneArrayErrors = []

    inputs[fieldNames.phone].forEach((phone, phoneIndex) => {
      if (phone && !regPhone.test(phone)) {
        phoneArrayErrors[phoneIndex] = 'Invalid number'
      }
    })

    if (phoneArrayErrors.length) {
      errors.phone = phoneArrayErrors
    }
  }

  return errors
}

export const capabilitiesValidation = (inputs) => {
  const errors = {}

  if (!inputs[fieldNames.skills] || inputs[fieldNames.skills].length < 3) {
    errors[fieldNames.skills] = 'Must be selected at least 3 skills'
  }

  return errors
}
