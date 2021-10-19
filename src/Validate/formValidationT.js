const formValidateT = formValues => {
  const errors = {};
  let isValid = true;

  if (!formValues.countryCode) {
    errors.countryCode = 'Please select country code from dropdown!';
    isValid = false;
  }

  if (!formValues.phoneNumber) {
    errors.phoneNumber = 'Please Enter your phone Number';
    isValid = false;
  }

  if (formValues.phoneNumber && formValues.phoneNumber.length !== 10) {
    errors.phoneNumber = 'Phone Number is of length 10';
    isValid = false;
  }

  if (!formValues.acceptTermsAndCondition) {
    errors.acceptTermsAndCondition = 'Please Accept Terms & Conditions';
    isValid = false;
  }

  return { isValid, errors };
};

export default formValidateT;
