import React, { useContext } from 'react';
import CloseBut from './close_but';
import { blogContext } from '../../../utils/context';

export default function AddBlogHeader() {
  const { handleAddBlogPanelVisibility } = useContext(blogContext);

  return (
    <div
      className='flex justify-between
                w-full 
                p-3
                bg-gradient-to-r from-purple-500 to-pink-500 
                rounded-t
                '
    >
      <p className=' text-white font-medium text-md tracking-tight lg:text-md'>
        New blog
      </p>
      <CloseBut onClick={handleAddBlogPanelVisibility} />
    </div>
  );
}
