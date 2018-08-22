import {fieldNames } from "consts";

export const avatar = (input) =>
  input.size <= 1000000 ? undefined : `Размер превышает 1Mb`;

export const accountValidation = inputs => {
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

  return errors;
};

export const confirmPassword = (input) =>
  input ? undefined : `Required`;


export const matchInput = (input, allInputs) =>
  input === allInputs[fieldNames.password] ? undefined : 'Password does not match';

export const profileValidation = inputs => {
  const errors = {};
  if (!inputs[fieldNames.firstName]) {
    errors[fieldNames.firstName] = 'Required';
  }
  if (!inputs[fieldNames.lastName]) {
    errors[fieldNames.lastName] = 'Required';
  }
  if (!inputs[fieldNames.email]) {
    errors[fieldNames.email] = 'Required';
  }
  if (!inputs[fieldNames.address]) {
    errors[fieldNames.address] = 'Required';
  }
  return errors;
};