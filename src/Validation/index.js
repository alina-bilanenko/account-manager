import {fieldNames } from "consts";

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
  if (!inputs[fieldNames.birthDate]) {
    errors[fieldNames.lastName] = 'Required';
  }

  return errors;
};