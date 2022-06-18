import React from 'react';

export default function AddButtonLg({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='px-6 py-2 text-xl font-medium text-white transition-all rounded-md shadow-lg cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 justify-self-center focus:outline-none hover:scale-105 hover:shadow-md active:scale-95 active:shadow-none'
      id='add-blog-button'
    >
      + New blog
    </button>
  );
}
