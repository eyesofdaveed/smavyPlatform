import React from 'react';

export const RadioButton = ({ text, role, onChange, value }) => {
  return (
    <label>
      <input type="radio" name="group1" onChange={onChange} value={value} />
      {text}
    </label>
  );
};
