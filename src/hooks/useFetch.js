import { useEffect, useState } from "react";

// URL를 전달받아 API를 호출한다.
export default function useFetch(url) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setMovies([...movies, ...json.results]);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [movies, loading];
}
