import React from 'react';

export const RadioButton = ({ text, role, onChange }) => {
  const handleRole = () => {
    onChange(role);
  };
  return (
    <label>
      <input type="radio" name="group1" onChange={handleRole} />
      {text}
    </label>
  );
};
