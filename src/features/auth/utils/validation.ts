/**
 * Validation utilities for form inputs
 */

export const validateEmail = (email: string): boolean => {
  return email.includes("@") && email.length > 0;
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 6) {
    return { isValid: false, message: "Password must be at least 6 characters" };
  }
  return { isValid: true };
};

export const validateUsername = (username: string): { isValid: boolean; message?: string } => {
  if (username.length < 3) {
    return { isValid: false, message: "Username must be at least 3 characters" };
  }
  return { isValid: true };
};

export const validateRequired = (value: string, fieldName: string): { isValid: boolean; message?: string } => {
  if (!value || value.trim() === "") {
    return { isValid: false, message: `${fieldName} is required` };
  }
  return { isValid: true };
};
