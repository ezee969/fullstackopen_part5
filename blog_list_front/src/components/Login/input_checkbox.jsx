import React from 'react';

export default function InputCheckbox({ id, labelText, onChange }) {
  return (
    <div className=''>
      <input
        onChange={onChange}
        className='h-4 w-4 mt-1 mr-2 align-top cursor-pointer'
        type='checkbox'
        id={id}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
}
