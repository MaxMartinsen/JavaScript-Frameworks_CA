export const validateLength = (value, minLength = 3) =>
  value.trim().length >= minLength;
