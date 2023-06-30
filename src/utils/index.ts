import Router from "next/router";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  const lengthRegex = /^.{6,}$/;
  return lengthRegex.test(password);
};

const navigateTo = (url: string): void => {
  Router.push(url);
};

export const utils = {
  validateEmail,
  validatePassword,
  navigateTo,
};
