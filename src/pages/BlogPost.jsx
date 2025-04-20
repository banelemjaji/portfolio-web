import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({ title: '', date: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then(res => res.text())
      .then(md => {
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
        setMeta({ title, date });
        setContent(body);
      });
  }, [slug]);

  return (
    <div className="max-w-2xl mx-auto mt-28 mb-20 px-4">
      <button
        className="mb-8 px-4 py-2 rounded bg-[#89FFAA] text-[#0C1821] font-semibold shadow hover:bg-[#6fdc8c] transition-colors duration-200"
        onClick={() => navigate(-1)}
      >
        ← Back to Blog
      </button>
      <h1 className="text-3xl md:text-4xl font-bold text-[#89FFAA] mb-2 tracking-tight">{meta.title}</h1>
      <p className="text-slate-400 text-sm mb-6">{meta.date}</p>
      <div className="prose prose-invert max-w-none bg-[#0C1821] p-6 rounded-xl border border-white/10 shadow">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
