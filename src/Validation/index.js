import {fieldNames } from "consts";
import moment from 'moment'

export const accountValidation = (inputs) => {
  const errors = {};

  if (!inputs[fieldNames.userName]) {
    errors[fieldNames.userName] = 'Required';
  }

  if (!inputs[fieldNames.password]) {
    errors[fieldNames.password] = 'Required';
  }

  if (!inputs[fieldNames.repeatPassword]) {
    errors[fieldNames.repeatPassword] = 'Required';
  }

  if (
    inputs[fieldNames.photo] &&
    new Blob([inputs[fieldNames.photo]]).size > 1000000
  ) {
    errors[fieldNames.photo] = 'Size too big'
  }

  return errors;
};

export const confirmPassword = (input) =>
  input ? undefined : `Required`;


export const matchInput = (input, allInputs) =>
  input === allInputs[fieldNames.password] ? undefined : 'Passwords don’t match';

export const profileValidation = inputs => {
  const errors = {};

  if (!inputs[fieldNames.firstName]) {
    errors[fieldNames.firstName] = 'Required';
  }

  if (!inputs[fieldNames.lastName]) {
    errors[fieldNames.lastName] = 'Required';
  }

  if(inputs[fieldNames.birthDate] && moment().diff(inputs[fieldNames.birthDate], 'years') < 18) {
    errors[fieldNames.birthDate] = 'You must be over 18 years of age';
  }

  if (!inputs[fieldNames.email]) {
    errors[fieldNames.email] = 'Required';
  }

  return errors;
};

export const contactsValidation = (inputs) => {
  const errors = {};
  const reg = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

  if (!inputs[fieldNames.company]) {
    errors[fieldNames.company] = 'Required';
  }

  if (!inputs[fieldNames.mainLanguage]) {
    errors[fieldNames.mainLanguage] = 'Required';
  }

  if (inputs[fieldNames.fax] && !reg.test(inputs[fieldNames.fax])) {
    errors[fieldNames.fax] = 'Invalid number';
  }

  if (inputs[fieldNames.phone] && inputs[fieldNames.phone].length) {
    const phoneArrayErrors = [];
    console.log(inputs[fieldNames.phone] )
    // inputs[fieldNames.phone].forEach((phone, phoneIndex) => {
    //   if (!reg.test(inputs[fieldNames.fax])) {
    //     phoneArrayErrors[phoneIndex] = 'Invalid number';
    //   }
    // });
    // if (phoneArrayErrors.length) {
    //   errors.phone = phoneArrayErrors;
    // }
  }

  return errors;
};

export const capabilitiesValidation = (inputs) => {
  const errors = {};


  return errors;
};