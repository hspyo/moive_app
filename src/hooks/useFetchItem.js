import { useEffect, useState } from 'react';

export default function useFetchItem(url) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setMovie(json);
    };
    fetchData();
  }, [url]);

  return movie;
}