import React, { useState, useEffect } from 'react';
import '../Quote.css';

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const category = 'funny';
  const apiKey = 'zgOqG2jb6JXvwwOsEaitFQ==jIP5PJcFtQmNOYQu';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': apiKey,
            },
          },
        );
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Oooops, Error fetching data</p>;
  }

  return (
    <div className="quote-section">
      <q>{quote.quote}</q>
      <p><b>{quote.author}</b></p>
    </div>
  );
};

export default Quote;
