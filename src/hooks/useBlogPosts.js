// src/hooks/useBlogPosts.js
import { useState, useEffect } from 'react';
import { parseMarkdown } from '../utils/markdown';

/**
 * Custom hook to fetch and parse blog posts
 * @param {Array} postsList - Array of blog post objects with filenames
 * @returns {Object} - Blog posts data and loading state
 */
export function useBlogPosts(postsList) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    Promise.all(
      postsList.map(async (post) => {
        try {
          const res = await fetch(`/blog/${post.filename}`);
          
          if (!res.ok) {
            throw new Error(`Failed to fetch ${post.filename}`);
          }
          
          const md = await res.text();
          const { title, date, excerpt, tags, readingTime, body } = parseMarkdown(md);
          
          return { 
            ...post, 
            title, 
            date, 
            excerpt, 
            tags, 
            readingTime,
            slug: post.filename.replace(/\.md$/, '')
          };
        } catch (err) {
         // console.error(`Error loading ${post.filename}:`, err);
          return null;
        }
      })
    )
      .then(results => {
        // Filter out null results from failed fetches
        const validPosts = results.filter(Boolean);
        // Sort by date (newest first)
        validPosts.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        
        setPosts(validPosts);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, [postsList]);

  return { posts, isLoading, error };
}
