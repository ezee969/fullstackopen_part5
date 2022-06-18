import React from 'react';

export default function BlogButton({ text, onClick, id }) {
  return (
    <button
      className='px-4 py-1 m-auto font-medium text-white duration-150 bg-indigo-500 border rounded md:text-lg xl:text-xl hover:bg-indigo-700 active:bg-indigo-400 active:shadow-md'
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
}
