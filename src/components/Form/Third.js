import React from 'react';

function Third({ formData, onChange, errors }) {
  const { phoneNumber, countryCode, acceptTermsAndCondition } = formData;

  return (
    <div>
      <div>
        <div>Country Code:</div>

        <select name="countryCode" value={countryCode} onChange={e => onChange(e)}>
          <option value="+91">India (+91)</option>
          <option value="+1"> America (+1)</option>
        </select>
        {errors && !errors.isValid && errors.errors.countryCode && (
          <p className="error-text">{errors.errors.countryCode}</p>
        )}
      </div>

      <div>
        <div>Phone Number:</div>
        <input type="text" name="phoneNumber" value={phoneNumber} onChange={e => onChange(e)} />
        {errors && !errors.isValid && errors.errors.phoneNumber && (
          <p className="error-text">{errors.errors.phoneNumber}</p>
        )}
      </div>

      <div>
        <div htmlFor="acceptTermsAndCondition">Accept Terms and Condition:</div>
        <input
          type="checkbox"
          name="acceptTermsAndCondition"
          value={acceptTermsAndCondition}
          onChange={e => onChange(e)}
        />
        {errors && !errors.isValid && errors.errors.acceptTermsAndCondition && (
          <p className="error-text">{errors.errors.acceptTermsAndCondition}</p>
        )}
      </div>
    </div>
  );
}

export default Third;
