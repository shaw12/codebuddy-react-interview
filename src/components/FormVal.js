import React, { useState } from 'react';
import './FormVal.css';

import { Steps, Button, message } from 'antd';
import First from './Form/First';
import Second from './Form/Second';
import Third from './Form/Third';
import formValidateF from '../Validate/formValidateF';
import formValidateS from '../Validate/formValidationS';

const { Step } = Steps;

function FormVal() {
  const initialState = {
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [current, setCurrent] = React.useState(0);
  const [errors, setErrors] = useState({
    isValid: true,
    errors: {},
  });

  const next = () => {
    let goTo = true;
    let validate;
    if (current === 0) {
      validate = formValidateF({
        emailId: formData.emailId,
        password: formData.password,
      });
      setErrors(validate);
      //   goTo = validate.isValid;
    }

    if (current === 1) {
      validate = formValidateS({
        firstName: formData.firstName,
        address: formData.address,
      });
      setErrors(validate);
    }

    // if (current === 2) {
    //     validate = formValidateT({
    //       countryCode: formData.countryCode,
    //       address: formData.address,
    //     });
    //     setErrors(validate);
    //   }

    goTo = validate && validate.isValid;

    if (goTo) setCurrent(current + 1);
  };

  console.log(errors);
  const prev = () => {
    setCurrent(current - 1);
  };

  const handleChange = e => {
    console.log(e);
    if (e.target.name === 'acceptTermsAndCondition') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const steps = [
    {
      title: 'First',
      content: <First formData={formData} onChange={e => handleChange(e)} errors={errors} />,
    },
    {
      title: 'Second',
      content: <Second formData={formData} onChange={e => handleChange(e)} errors={errors} />,
    },
    {
      title: 'Last',
      content: <Third formData={formData} onChange={e => handleChange(e)} errors={errors} />,
    },
  ];

  return (
    <div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default FormVal;
