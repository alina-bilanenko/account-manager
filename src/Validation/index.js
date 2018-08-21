import {fieldNames } from "consts";

export const avatar = (input) =>
  input.size <= 1000000 ? undefined : `Размер превышает 1Mb`;

export const validate = inputs => {
  const errors = {};
  if (!inputs[fieldNames.userName]) {
    errors[fieldNames.userName] = 'Введите имя пользователя';
  }
  if (!inputs[fieldNames.password]) {
    errors[fieldNames.password] = 'Введите ваш пароль';
  }
  return errors;
};