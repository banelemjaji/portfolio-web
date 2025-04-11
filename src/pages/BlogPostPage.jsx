import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams to get URL parameters

function BlogPostPage() {
  const { slug } = useParams(); // Get the 'slug' parameter from the URL

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-10rem)]">
      <Link to="/blog" className="text-blue-400 hover:underline mb-4 inline-block">&larr; Back to Blog List</Link>
      <h1 className="text-3xl font-bold text-white my-4">Blog Post: {slug}</h1>
      <p>Content for the blog post with slug "{slug}" will be rendered here using Markdown.</p>
    </div>
  );
}

export default BlogPostPage;