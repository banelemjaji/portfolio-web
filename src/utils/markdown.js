// utils/markdown.js
/**
 * Parse markdown content and extract frontmatter
 * @param {string} md - Markdown content with frontmatter
 * @returns {Object} - Parsed frontmatter and content
 */
export function parseMarkdown(md) {
  // Default values
  let title = '';
  let date = '';
  let excerpt = '';
  let tags = [];
  let body = md;
  
  // Extract frontmatter if exists
  if (md.startsWith('---')) {
    const end = md.indexOf('---', 3);
    if (end !== -1) {
      const frontmatter = md.substring(3, end).trim().split('\n');
      frontmatter.forEach(line => {
        if (line.startsWith('title:')) title = line.replace('title:', '').trim();
        if (line.startsWith('date:')) date = line.replace('date:', '').trim();
        if (line.startsWith('tags:')) {
          const tagsStr = line.replace('tags:', '').trim();
          tags = tagsStr.split(',').map(tag => tag.trim());
        }
        if (line.startsWith('excerpt:')) excerpt = line.replace('excerpt:', '').trim();
      });
      body = md.substring(end + 3).trim();
    }
  }
  
  // If no explicit excerpt, get first paragraph or first 200 chars
  if (!excerpt) {
    excerpt = body.split(/\n\n|\r\n\r\n/)[0].trim();
    // Strip markdown formatting from excerpt
    excerpt = excerpt.replace(/!\[.*?\]\(.*?\)/g, ''); // Remove images
    excerpt = excerpt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1'); // Replace links with just text
    excerpt = excerpt.replace(/[*#_~`]/g, ''); // Remove markdown symbols
    
    if (excerpt.length > 200) excerpt = excerpt.slice(0, 200) + '...';
  }
  
  // Calculate reading time (words ÷ 200 words per minute)
  const words = body.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  
  return { title, date, excerpt, tags, readingTime, body };
}

/**
 * Get a formatted date string
 * @param {string} dateStr - Date string from frontmatter
 * @returns {string} - Formatted date
 */
export function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (e) {
    return dateStr; // Return original if parsing fails
  }
}
