import React, { useContext, useState } from 'react';
import InputTextBox from '../../input_text_box';
import BlogButton from '../blog_button';
import { blogContext } from '../../../utils/context';

export default function AddBlogForm() {
  const { handleNewBlog } = useContext(blogContext);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogUrl, setBlogUrl] = useState('');

  const handleFormSubmit = () => {
    const newBlog = {
      title: blogTitle,
      url: blogUrl,
      author: blogAuthor,
    };

    setBlogTitle('');
    setBlogAuthor('');
    setBlogUrl('');

    handleNewBlog(newBlog);
  };

  return (
    <>
      <form
        name='addBlogform'
        className='flex flex-col gap-4 px-3 pt-3 mb-3 xl:px-4 2xl:px-6'
        action=''
      >
        <InputTextBox
          value={blogTitle}
          onChange={({ target }) => {
            setBlogTitle(target.value);
          }}
          type='text'
          name='Blog title'
          placeholder='Blog title'
          id='title-input'
        />
        <InputTextBox
          value={blogAuthor}
          onChange={({ target }) => {
            setBlogAuthor(target.value);
          }}
          type='text'
          name='Blog author'
          placeholder='Blog author'
          id='author-input'
        />
        <InputTextBox
          value={blogUrl}
          onChange={({ target }) => {
            setBlogUrl(target.value);
          }}
          type='text'
          name='Blog url'
          placeholder='Blog url'
          id='url-input'
        />
      </form>
      <BlogButton
        id={'save-blog-button'}
        text='Save blog'
        onClick={handleFormSubmit}
      />
    </>
  );
}
