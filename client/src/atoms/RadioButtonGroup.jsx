import React from 'react';

const RadioButtonGroup = ({ options, value, onChange }) => {
  const handleChange = e => onChange(e.target.value);

  return options.map((option, index) => (
    <label key={option.value}>
      <input
        type="radio"
        value={option.value}
        onChange={handleChange}
        checked={option.value === value}
      />
      {option.label}
    </label>
  ));
};

export default RadioButtonGroup;
