// src/components/BlogPostCard.jsx
import React from 'react';
import { formatDate } from '../utils/markdown';

const BlogPostCard = ({ post, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(post)}
      onKeyDown={e => { if (e.key === 'Enter') onClick(post); }}
      className="cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border border-white/10 shadow hover:shadow-lg hover:shadow-[#89FFAA]/10 hover:translate-y-[-2px] group focus:outline-none focus:ring-2 focus:ring-[#89FFAA] flex flex-col"
    >
      {/* Dark overlay gradient at the bottom */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-b from-gray-900 to-[#0c1620]">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
      </div>

      <div className="p-6 bg-[#181e29] flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-blue-400 group-hover:text-[#89FFAA] transition-colors duration-200 leading-snug flex-grow">
            {post.title}
          </h2>
        </div>
        
        <p className="text-slate-400 mb-4 text-base line-clamp-3">{post.excerpt}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            {formatDate(post.date)}
          </span>
          <span className="text-slate-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {post.readingTime} min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
