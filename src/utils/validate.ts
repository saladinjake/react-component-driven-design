const validEmailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const checkNumberRegex = /^\d+$/;
export const checkPhoneRegex = /^(070|080|090|081)[0-9]{8}$/;
const checkRoleCode = /^[0-9]{2}$/;

let error = "";

export const validatePhoneNumber = (value: string) => {
  if(value.length === 0) {
    error = "Must be between 7 to 20 digit number"
  } else if (!checkNumberRegex.test(value)) {
    error = "Must contain only numbers";
  } else if (value.length < 7 || value.length > 20) {
    error = "Must be between 7 to 20 digit number";
  } else {
    error = "";
  }
  return error;
};

export const validateSingleName = (value: string, label: string) => {
  if (value.length === 0) {
    error = `${label} is required!`;
  } else if (value.length < 2) {
    error = `${label} must not be less than 2 characters!`;
  } else {
    error = "";
  }

  return error;
};

export const validateEmail = (value: string) => {
  !validEmailRegex.test(value) ? (error = "Email must be valid") : (error = "");
  return error;
};

export const validateNumber = (value: string) => {
  if (!checkNumberRegex.test(value)) {
    error = "Must contain only numbers";
  } else {
    error = "";
  }
  return error;
};

export const validateRoleCode = (value: string) => {
  if (value.length === 0) {
    error = "Role Code is required!";
  } else if (value.length < 2) {
    error = "Role Code must not be less than 2 numbers!";
  } else if (value.length > 2) {
    error = "Role Code cannot be more than 2 numbers!";
  } else if (!checkRoleCode.test(value)) {
    error = "Role Code must be 2 numbers!";
  } else {
    error = "";
  }

  return error;
};
