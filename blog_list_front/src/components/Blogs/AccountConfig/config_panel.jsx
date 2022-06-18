import React, { useContext } from 'react';
import { blogContext } from '../../../utils/context';
import BlogButton from '../blog_button';

export default function ConfigPanel({ isVisible }) {
  const { handleLogout } = useContext(blogContext);

  const invisibleStyle = 'max-h-0 ';
  const visibleStyle = 'h-auto max-h-screen py-2 px-4 lg:px-6 lg:py-3';

  return (
    <div
      className={`${isVisible ? visibleStyle : invisibleStyle}
                flex overflow-hidden
                shadow-md rounded
                bg-slate-200
                md:mr-3
                transition-all`}
    >
      <BlogButton text='Sign out' onClick={handleLogout} />
    </div>
  );
}
