import React from 'react';

export default function InputTextBox({
  type,
  placeholder,
  id,
  onChange,
  name,
  value,
}) {
  return (
    <input
      id={id}
      className=' 
                px-4 py-2
                text-gray-700 xl:text-lg
                border rounded 
                focus:border-blue-600 focus:outline-none'
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
}
