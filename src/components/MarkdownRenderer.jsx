import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      className="prose prose-lg prose-invert max-w-none"
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer; 