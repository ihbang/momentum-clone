import axios from 'axios';
import { useEffect, useState } from 'react';
import quoteStyles from './Quote.module.css';

const QUOTE_CONTENT_KEY = 'quote-content';
const QUOTE_AUTHOR_KEY = 'quote-author';

function Quote() {
  const [content, setContent] = useState(
    localStorage.getItem(QUOTE_CONTENT_KEY),
  );
  const [author, setAuthor] = useState(localStorage.getItem(QUOTE_AUTHOR_KEY));
  useEffect(() => {
    async function fetch() {
      const response = await axios.get('https://api.quotable.io/random');
      if (content === null || author === null) {
        setContent(response.data.content);
        setAuthor(response.data.author);
      }
      localStorage.setItem(QUOTE_CONTENT_KEY, response.data.content);
      localStorage.setItem(QUOTE_AUTHOR_KEY, response.data.author);
    }
    fetch();
  }, []);
  return (
    <div className={quoteStyles.container}>
      <div>{content}</div>
      <div className={quoteStyles.author}>{author}</div>
    </div>
  );
}

export default Quote;
