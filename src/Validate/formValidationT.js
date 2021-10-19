// const formValidateS = formValues => {
//     const errors = {};
//     let isValid = true;

//     if (!formValues.firstName) {
//       errors.firstName = 'Please Enter your Email!';
//       isValid = false;
//     }

//     if (
//       formValues.firstName &&
//       (formValues.firstName.length < 2 || formValues.firstName.length > 51)
//     ) {
//       errors.firstName = 'Name must be of 2 to 50!';
//       isValid = false;
//     }

//     if (!formValues.address) {
//       errors.address = 'Please Enter your address';
//       isValid = false;
//     }

//     if (formValues.address && formValues.address.length < 10) {
//       errors.address = 'Address is minimum of length 10';
//       isValid = false;
//     }

//     return { isValid, errors };
//   };

//   export default formValidateS;
