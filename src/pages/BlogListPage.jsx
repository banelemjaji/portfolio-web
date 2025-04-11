import React from 'react';
import { Link } from 'react-router-dom'; 

function BlogListPage() {
  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold text-white my-4">Blog</h1>
      <p>List of blog posts will appear here.</p>
      {/* Example Link */}
      <div className="mt-4">
        <Link to="/blog/my-first-post" className="text-blue-400 hover:underline">
           View Example Post: My First Post
        </Link>
      </div>
    </div>
  );
}

export default BlogListPage;