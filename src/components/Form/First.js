import React from 'react';

function First({ formData, onChange, errors }) {
  const { emailId, password } = formData;

  return (
    <div>
      <div className="form-row">
        <div>Email ID</div>
        <input type="email" name="emailId" value={emailId} onChange={e => onChange(e)} />
        {errors && !errors.isValid && errors.errors.emailId && (
          <p className="error-text">{errors.errors.emailId}</p>
        )}
      </div>

      <div className="form-row">
        <div>Password</div>
        <input type="password" name="password" value={password} onChange={e => onChange(e)} />
        {errors && !errors.isValid && errors.errors.password && (
          <p className="error-text">{errors.errors.password}</p>
        )}
      </div>
    </div>
  );
}

export default First;
