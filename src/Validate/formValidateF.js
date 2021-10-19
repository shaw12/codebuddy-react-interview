const formValidateF = formValues => {
  const errors = {};
  let isValid = true;

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordPattern = /(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/;

  if (!formValues.emailId) {
    errors.emailId = 'Please Enter your Email!';
    isValid = false;
  }

  if (formValues.emailId && !emailPattern.test(formValues.emailId)) {
    errors.emailId = 'Please Enter your Valid Email!';
    isValid = false;
  }

  if (!formValues.password) {
    errors.password = 'Please Enter your password';
    isValid = false;
  }

  if (formValues.password && !passwordPattern.test(formValues.password)) {
    errors.password =
      'Password atleast contain 2 capital letters, 2 small letter, 2 numbers and 2 special characters';
    isValid = false;
  }

  return { isValid, errors };
};

export default formValidateF;
