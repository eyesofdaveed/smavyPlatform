import React from 'react';

import Input from './Input';

export const Label = ({ text, onChange }) => {
  return (
    <label>
      {text}
      <Input
        type="radio"
        name="group1"
        onChange={() => onChange(name)}
        required
      />
    </label>
  );
};
