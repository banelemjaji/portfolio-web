import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // Utility to parse frontmatter and get preview
  function parseMarkdown(md, filename) {
    let title = '', date = '', body = '';
    if (md.startsWith('---')) {
      const end = md.indexOf('---', 3);
      if (end !== -1) {
        const fm = md.substring(3, end).trim().split('\n');
        fm.forEach(line => {
          if (line.startsWith('title:')) title = line.replace('title:', '').trim();
          if (line.startsWith('date:')) date = line.replace('date:', '').trim();
        });
        body = md.substring(end + 3).trim();
      }
    } else {
      body = md;
    }
    let preview = body.split(/\n\n|\r\n\r\n/)[0].trim();
    if (preview.length > 200) preview = preview.slice(0, 200) + '...';
    return { filename, title, date, preview };
  }

  useEffect(() => {
    Promise.all([
      fetch('/blog/my-first-post.md').then(res => res.text()).then(md => parseMarkdown(md, 'my-first-post.md')),
      fetch('/blog/steve-jobs-art-of-innovation.md').then(res => res.text()).then(md => parseMarkdown(md, 'steve-jobs-art-of-innovation.md'))
    ]).then(setPosts);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-28 mb-20 px-4">
      <h1 className="text-4xl font-extrabold text-white mb-2">Blog</h1>
      <p className="text-slate-400 text-lg mb-10">A Collection of my development thoughts and perspectives</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <div
            key={post.filename}
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/blog/${post.filename.replace('.md', '')}`)}
            onKeyDown={e => { if (e.key === 'Enter') navigate(`/blog/${post.filename.replace('.md', '')}`); }}
            className="cursor-pointer rounded-xl p-6 bg-[#181e29] hover:bg-[#232a3a] transition-colors duration-200 border border-white/10 shadow group focus:outline-none focus:ring-2 focus:ring-[#89FFAA]"
          >
            <h2 className="text-xl font-bold text-blue-400 group-hover:text-[#89FFAA] mb-2 leading-snug">
              {post.title}
            </h2>
            <p className="text-slate-400 mb-4 text-base">{post.preview}</p>
            <span className="block text-xs text-slate-500 mt-2">{post.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
