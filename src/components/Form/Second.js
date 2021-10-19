import React from 'react';

function Second({ formData, onChange, errors }) {
  const { firstName, lastName, address } = formData;
  return (
    <div>
      <div className="form-row">
        <div>First Name</div>
        <input type="text" name="firstName" value={firstName} onChange={e => onChange(e)} />
        {errors && !errors.isValid && errors.errors.firstName && (
          <p className="error-text">{errors.errors.firstName}</p>
        )}
      </div>
      <div className="form-row">
        <div>Last Name</div>
        <input type="text" name="lastName" value={lastName} onChange={e => onChange(e)} />
      </div>
      <div className="form-row">
        <div>Address</div>
        <textarea name="address" value={address} onChange={e => onChange(e)} />
        {errors && !errors.isValid && errors.errors.address && (
          <p className="error-text">{errors.errors.address}</p>
        )}
      </div>
    </div>
  );
}

export default Second;
