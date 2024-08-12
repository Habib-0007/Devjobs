import { useState, useEffect } from "react";

const fetchJobs = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetching data has been aborted");
          } else {
            setError(err.message);
            setLoading(false);
          }
        });
    }, 1);

    return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
};

export default fetchJobs;
