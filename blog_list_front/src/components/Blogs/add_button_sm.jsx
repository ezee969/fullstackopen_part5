import React from 'react';
import plusButton from '../../utils/images/plus.png';
import { motion } from 'framer-motion';

export default function AddButtonSm({ onClick, isOpen }) {
  const animate = {
    rotate: isOpen ? 45 : 0,
  };

  return (
    <motion.img
      animate={animate}
      src={plusButton}
      alt='add blog button'
      className='absolute duration-150 bg-white rounded-full shadow-lg cursor-pointer bottom-9 right-7 h-14 w-14 hover:scale-105 hover:shadow-md active:scale-95 active:shadow-none'
      onClick={onClick}
      id='add-blog-button'
    />
  );
}
