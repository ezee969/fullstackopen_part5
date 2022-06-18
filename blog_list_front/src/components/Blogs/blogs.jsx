import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blogService from '../../services/blogs';
import { blogContext } from '../../utils/context';
import UserCard from './user_card';
import BlogList from './blog_list';
import notification from './notification';
import { ToastContainer } from 'react-toastify';
import AddBlogModal from './AddBlog/add_blog_modal.jsx';
import AddButtonLg from './add_button_lg';
import AddButtonSm from './add_button_sm';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

export default function Blogs({ user, setUser }) {
  const [blogs, setBlogs] = useState(undefined);
  const [addBlogPanelOpen, setAddBlogPanelOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }

    updateBlogs();

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth, setUser]);

  const updateBlogs = async () => {
    const allBlogs = await blogService.getAll();

    setBlogs(allBlogs);
  };

  const handleNewBlog = (newBlog) => {
    blogService
      .create(newBlog, user.token)
      .then(() =>
        blogService
          .getAll()
          .then((allBlogs) => setBlogs(allBlogs))
          .then(() => notification.Success())
      )
      .catch((error) => notification.Error());

    handleAddBlogPanelVisibility();
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    navigate('/');
  };

  const handleLike = async (newBlog, blogId, operation) => {
    newBlog.likes = operation === 'add' ? newBlog.likes + 1 : newBlog.likes - 1;
    await blogService.replace(newBlog, blogId);

    await updateBlogs();
  };

  const handleDelete = async (blogId, token) => {
    await blogService.del(blogId, token);
    await updateBlogs();
  };

  const handleAddBlogPanelVisibility = () => {
    setAddBlogPanelOpen(!addBlogPanelOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='h-screen w-screen grid grid-cols-1 grid-rows-[0fr_2fr_9fr] lg:grid-rows-[0fr_2fr_0.5fr_8.5fr] bg-gray-100 py-4 px-2 md:px-4 lg:px-8 xl:px-10 2xl:px-12'
    >
      <blogContext.Provider
        value={{
          user,
          handleLogout,
          handleNewBlog,
          handleAddBlogPanelVisibility,
          blogs,
          handleLike,
          handleDelete,
        }}
      >
        <ToastContainer />
        <UserCard user={user} />
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {addBlogPanelOpen && (
            <AddBlogModal handleClose={handleAddBlogPanelVisibility} />
          )}
        </AnimatePresence>

        {windowWidth >= 1024 ? (
          <AddButtonLg onClick={handleAddBlogPanelVisibility} />
        ) : (
          <AddButtonSm
            isOpen={addBlogPanelOpen}
            onClick={handleAddBlogPanelVisibility}
          />
        )}
        {blogs && <BlogList blogs={blogs} windowWidth={windowWidth} />}
      </blogContext.Provider>
    </motion.div>
  );
}
