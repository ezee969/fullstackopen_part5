import React from 'react';
import closeBut from '../../../utils/images/cancel.png';

export default function CloseBut({ onClick }) {
  return (
    <img
      className='h-auto w-7 rounded-full border-2 border-slate-200 
                hover:border-blue-400
                active:border-blue-500 transition-all
                cursor-pointer'
      onClick={onClick}
      src={closeBut}
      alt='close button'
    />
  );
}
