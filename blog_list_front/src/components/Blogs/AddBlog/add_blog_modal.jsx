import React from 'react';
import AddBlogWindow from './add_blog_window';
import Backdrop from '../../Backdrop/backdrop';

export default function AddBlogModal({ handleClose }) {
  return (
    <Backdrop onClick={handleClose}>
      <AddBlogWindow />
    </Backdrop>
  );
}
