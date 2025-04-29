import React, { useState, useEffect } from 'react';

// Custom components and hooks
import { useBlogPosts } from '../hooks/useBlogPosts';
import BlogPostCard from '../components/BlogPostCard.jsx';
import BlogPost from '../components/BlogPost.jsx';

// Blog posts configuration
const blogPosts = [
  {
    // filename: 'steve-jobs-art-of-innovation.md',
  },
  // Add more posts here as you add more markdown files
];

export default function Blog() {
  const { posts, isLoading, error } = useBlogPosts(blogPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [content, setContent] = useState('');
  const [isContentLoading, setIsContentLoading] = useState(false);

  // Load the full content when a post is selected
  useEffect(() => {
    if (selectedPost) {
      setIsContentLoading(true);
      fetch(`/blog/${selectedPost.filename}`)
        .then((res) => res.text())
        .then((data) => {
          setContent(data);
          setIsContentLoading(false);
          
          // Scroll to top when viewing a post
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch((err) => {
          console.error('Error loading blog content:', err);
          setIsContentLoading(false);
        });
    }
  }, [selectedPost]);

  // Handle selecting a post
  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  // Handle going back to the list
  const handleBack = () => {
    setSelectedPost(null);
    setContent('');
  };

  return (
    <div className="max-w-6xl mx-auto mt-28 mb-20 px-4">
      {!selectedPost ? (
        // Blog listing view
        <>
          

          {isLoading ? (
            // Loading state
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#89FFAA]"></div>
            </div>
          ) : error ? (
            // Error state
            <div className="bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Error loading blog posts</h3>
              <p>{error.message || 'Something went wrong'}</p>
            </div>
          ) : posts.length === 0 ? (
            // Empty state
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="text-2xl font-bold text-slate-400 mb-2">Under Construction</h3>
              <p className="text-slate-500">This section is currently being built. Please check back soon!</p>
            </div>
          ) : (
            // Blog post grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <BlogPostCard 
                  key={post.filename} 
                  post={post} 
                  onClick={handlePostSelect} 
                />
              ))}
            </div>
          )}
        </>
      ) : (
        // Single blog post view
        isContentLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#89FFAA]"></div>
          </div>
        ) : (
          <BlogPost 
            post={selectedPost} 
            content={content} 
            onBack={handleBack} 
          />
        )
      )}
    </div>
  );
}
