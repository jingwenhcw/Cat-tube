import { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      const data = response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { loading, error, data };
};
