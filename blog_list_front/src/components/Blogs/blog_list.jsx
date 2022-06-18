import Blog from './Blog/blog';

export default function BlogList({ blogs }) {
  return (
    <div className='flex flex-col overflow-auto rounded md:px-2 lg:px-4 xl:px-6 scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-blue-300'>
      <p className='mb-3 text-sm font-medium tracking-tight text-gray-700'>
        Blogs
      </p>
      <div className='flex flex-col gap-2 border-t'>
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <Blog
              key={blogs.findIndex((ablog) => ablog === blog)}
              title={blog.title}
              author={blog.author}
              likes={blog.likes}
              url={blog.url}
              userId={blog.user.id}
              blogUser={blog.user}
              id={blog.id}
            />
          ))}
      </div>
    </div>
  );
}
