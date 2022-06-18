import React, { useState, useContext } from 'react';
import { blogContext } from '../../../utils/context';
import BlogTitle from './blog_title';
import BlogDescription from './blog_description';
import ExpandBlogButton from './expand_button';
import BlogIcon from './blog_icon';
import LikeButton from './like_button';
import DeleteButton from './delete_button';

export default function Blog({
  title,
  url,
  likes,
  author,
  userId,
  id,
  blogUser,
}) {
  const [selected, setSelected] = useState(null);
  const [liked, setLiked] = useState(null);
  const [blog, setBlog] = useState({ title, url, likes, author, userId });
  const { handleLike, handleDelete, user } = useContext(blogContext);

  const handleLikeButton = () => {
    setLiked(!liked);
    handleLike(blog, id, !liked ? 'add' : 'substract');
  };

  return (
    <div className='flex flex-col gap-1 p-3 bg-white border-2 rounded-md shadow-md blog min-h-20 hover:shadow-slate-400 hover:shadow'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <BlogIcon />
          <BlogTitle title={title} />
        </div>
        <div className='flex items-center gap-3 '>
          <LikeButton handleLikeButton={handleLikeButton} liked={liked} />
          {user.username === blogUser.username && (
            <DeleteButton
              handleDeleteButton={() => handleDelete(id, user.token)}
            />
          )}
          <ExpandBlogButton selected={selected} setSelected={setSelected} />
        </div>
      </div>
      <BlogDescription
        url={url}
        likes={likes}
        author={author}
        selected={selected}
      />
    </div>
  );
}
