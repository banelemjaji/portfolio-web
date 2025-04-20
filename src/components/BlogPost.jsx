// src/components/BlogPost.jsx
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { formatDate } from '../utils/markdown';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme for code blocks
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';

const BlogPost = ({ post, content, onBack }) => {
  // Initialize syntax highlighting when content loads
  useEffect(() => {
    if (content) {
      setTimeout(() => {
        Prism.highlightAll();
      }, 0);
    }
  }, [content]);

  return (
    <article className="bg-gradient-to-b from-[#0C1821] to-[#172A3A]">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 rounded bg-[#89FFAA] text-[#0C1821] font-semibold shadow hover:bg-[#6fdc8c] transition-colors duration-200 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Blog List
      </button>
      
      <div className="bg-[#0C1821] rounded-xl border border-white/10 shadow-lg overflow-hidden">
        <div className="p-6 md:p-10 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
          
          <div className="flex items-center text-sm text-slate-400 mb-6 md:mb-10">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {post.readingTime} min read
            </span>
            
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="mx-2">•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="prose prose-invert md:prose-lg max-w-none px-6 md:px-10 pb-10">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({node, ...props}) => (
                <img {...props} className="rounded-lg shadow-lg my-8 max-w-full mx-auto" />
              ),
              a: ({node, ...props}) => (
                <a {...props} className="text-blue-400 hover:text-[#89FFAA] transition-colors" target="_blank" rel="noopener noreferrer" />
              ),
              code: ({node, inline, className, children, ...props}) => (
                <code
                  className={`${className} ${inline ? 'text-[#89FFAA]' : ''}`}
                  {...props}
                >
                  {children}
                </code>
              ),
              blockquote: ({node, ...props}) => (
                <blockquote 
                  {...props} 
                  className="border-l-4 border-[#89FFAA] pl-4 italic text-gray-300"
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
