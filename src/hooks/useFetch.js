import { useEffect, useRef, useState } from "react";

export default function useFetch(url) {
  const [Movies, setMovies] = useState([]);
  
  // 인기 영화 리스트 API를 호출한다.
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setMovies([...Movies, ...json.results]);
    };
    fetchData();
  }, [url]);

  return Movies;
}
